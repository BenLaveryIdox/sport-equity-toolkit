import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let particles: Particle[] = [];
      const numParticles = 50;
      const maxDistance = 120;
      let mouseXPos = 0;
      let mouseYPos = 0;

      p.setup = () => {
        const canvas = p.createCanvas(
          containerRef.current?.offsetWidth || 800,
          containerRef.current?.offsetHeight || 600
        );
        canvas.parent(containerRef.current!);

        // Initialize particles
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.5, 0.5),
            vy: p.random(-0.5, 0.5),
            size: p.random(2, 4),
          });
        }
      };

      p.draw = () => {
        p.clear();

        // Update mouse position smoothly
        mouseXPos = p.lerp(mouseXPos, p.mouseX, 0.1);
        mouseYPos = p.lerp(mouseYPos, p.mouseY, 0.1);

        // Update and draw particles
        particles.forEach((particle, i) => {
          // Mouse interaction - particles attracted to mouse
          const dx = mouseXPos - particle.x;
          const dy = mouseYPos - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.02;
            particle.vy += (dy / distance) * force * 0.02;
          }

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Damping
          particle.vx *= 0.98;
          particle.vy *= 0.98;

          // Add slight random movement
          particle.vx += p.random(-0.05, 0.05);
          particle.vy += p.random(-0.05, 0.05);

          // Boundary checking with soft bounce
          if (particle.x < 0 || particle.x > p.width) {
            particle.vx *= -0.8;
            particle.x = p.constrain(particle.x, 0, p.width);
          }
          if (particle.y < 0 || particle.y > p.height) {
            particle.vy *= -0.8;
            particle.y = p.constrain(particle.y, 0, p.height);
          }

          // Speed limit
          const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
          if (speed > 2) {
            particle.vx = (particle.vx / speed) * 2;
            particle.vy = (particle.vy / speed) * 2;
          }

          // Draw connections to nearby particles
          particles.slice(i + 1).forEach((other) => {
            const d = p.dist(particle.x, particle.y, other.x, other.y);
            if (d < maxDistance) {
              const alpha = p.map(d, 0, maxDistance, 25, 0);
              p.stroke(30, 168, 148, alpha); // Using primary color in RGB
              p.strokeWeight(1);
              p.line(particle.x, particle.y, other.x, other.y);
            }
          });

          // Draw particle with gradient effect
          const distToMouse = p.dist(particle.x, particle.y, mouseXPos, mouseYPos);
          const glowAmount = p.map(
            p.constrain(distToMouse, 0, 150),
            0,
            150,
            40,
            15
          );

          // Outer glow
          p.noStroke();
          p.fill(30, 168, 148, glowAmount / 2); // Primary color with low opacity
          p.circle(particle.x, particle.y, particle.size * 3);

          // Core particle with accent color for nearby particles
          if (distToMouse < 100) {
            p.fill(189, 96, 217, p.map(distToMouse, 0, 100, 120, 40)); // Accent color
          } else {
            p.fill(30, 168, 148, 80); // Primary color
          }
          p.circle(particle.x, particle.y, particle.size);
        });
      };

      p.windowResized = () => {
        if (containerRef.current) {
          p.resizeCanvas(
            containerRef.current.offsetWidth,
            containerRef.current.offsetHeight
          );
        }
      };
    };

    p5Instance.current = new p5(sketch);

    return () => {
      p5Instance.current?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  );
};
