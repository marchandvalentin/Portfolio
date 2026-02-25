import { CanvasTexture, DoubleSide, Mesh } from 'three'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import type { Project } from '../constants/projects'

RectAreaLightUniformsLib.init()

export default function Monitor(props: { project: Project }) {
    const monitorModel = useGLTF('models/curved_monitor.glb')

    const monitorModelRef = useRef<Mesh>(null)
    const meshRef = useRef<Mesh>(null)
    const [screenTexture, setScreenTexture] = useState<CanvasTexture | null>(null)

    // Rebuild texture whenever project changes
    useEffect(() => {
        buildProjectTexture(props.project).then((tex) => setScreenTexture(tex))
    }, [props.project])

    const curveApplied = useRef(false)

    // Curvature effect — run after mesh mounts (when screenTexture first arrives)
    useEffect(() => {
        if (!meshRef.current || curveApplied.current) return
        const geometry = meshRef.current.geometry
        const positions = geometry.attributes.position.array
        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i]
            const normalizedX = x / 2.8
            const curve = (normalizedX * normalizedX) * 0.2
            positions[i + 2] += curve
        }
        geometry.attributes.position.needsUpdate = true
        geometry.computeVertexNormals()
        curveApplied.current = true
    }, [screenTexture])

    return (
        <>
            <primitive
                ref={monitorModelRef}
                object={monitorModel.scene}
                position={[0, -2, -7]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[65, 65, 65]}
            />

            {/* Screen glow */}
            <rectAreaLight
                position={[0, 1.15, -5.8]}
                rotation={[0, Math.PI, 0]}
                width={10}
                height={5}
                intensity={1}
                color="#FFFFFF"
            />

            {screenTexture && (
                <mesh ref={meshRef} position={[0, 1.15, -6.2]} rotation={[-Math.PI / 26.08, 0, 0]}>
                    <planeGeometry args={[9.7, 4.73, 32, 16]} />
                    <meshStandardMaterial
                        map={screenTexture}
                        emissiveMap={screenTexture}
                        emissive="#FFFFFF"
                        emissiveIntensity={2}
                        transparent
                        side={DoubleSide}
                    />
                </mesh>
            )}
        </>
    )
}

// ── Canvas layout: 1024×512, white on black ────────────────────────────────
async function buildProjectTexture(project: Project): Promise<CanvasTexture> {
    const W = 1024
    const H = 512
    const canvas = document.createElement('canvas')
    canvas.width = W
    canvas.height = H
    const ctx = canvas.getContext('2d')!

    // Background
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, W, H)

    const GREEN = '#FFFFFF'
    const DIM_GREEN = '#777777'

    // ── Title bar ────────────────────────────────────────────────
    ctx.fillStyle = DIM_GREEN
    ctx.fillRect(0, 0, W, 80)
    ctx.fillStyle = GREEN
    ctx.font = 'bold 48px monospace'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText(project.title, 24, 40)

    // ── Divider ──────────────────────────────────────────────────
    ctx.strokeStyle = DIM_GREEN
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, 82)
    ctx.lineTo(W, 82)
    ctx.stroke()

    // ── Image (left half) ─────────────────────────────────────────
    const imgX = 16
    const imgY = 100
    const imgW = 460
    const imgH = 380
    ctx.strokeStyle = DIM_GREEN
    ctx.lineWidth = 2
    ctx.strokeRect(imgX, imgY, imgW, imgH)

    try {
        const img = await loadImage(project.imageURL)
        // Cover-fit the image within the box
        const scale = Math.min(imgW / img.width, imgH / img.height)
        const dw = img.width * scale
        const dh = img.height * scale
        const dx = imgX + (imgW - dw) / 2
        const dy = imgY + (imgH - dh) / 2
        ctx.drawImage(img, dx, dy, dw, dh)
    } catch {
        // No image — show placeholder text
        ctx.fillStyle = DIM_GREEN
        ctx.font = '20px monospace'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('[ NO IMAGE ]', imgX + imgW / 2, imgY + imgH / 2)
    }

    // ── Description (right half) ──────────────────────────────────
    ctx.fillStyle = GREEN
    ctx.font = '22px monospace'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    const descX = 510
    const descY = 100
    const descMaxW = W - descX - 16
    wrapText(ctx, project.description, descX, descY, descMaxW, 30)

    return new CanvasTexture(canvas)
}

function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = url
    })
}

function wrapText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number, y: number,
    maxWidth: number,
    lineHeight: number
) {
    const words = text.split(' ')
    let line = ''
    let currentY = y
    for (const word of words) {
        const testLine = line + word + ' '
        if (ctx.measureText(testLine).width > maxWidth && line !== '') {
            ctx.fillText(line.trim(), x, currentY)
            line = word + ' '
            currentY += lineHeight
        } else {
            line = testLine
        }
    }
    if (line.trim()) ctx.fillText(line.trim(), x, currentY)
}