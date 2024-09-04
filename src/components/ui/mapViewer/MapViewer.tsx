import React, { useState, useEffect, useRef } from 'react';
import styles from './MapViewer.module.scss';

interface MapViewerProps {
    mapSrc: string;
}

const MapViewer: React.FC<MapViewerProps> = ({ mapSrc }) => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);
    const [initialLeft, setInitialLeft] = useState<number>(0);
    const [initialTop, setInitialTop] = useState<number>(0);

    const mapWrapperRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging && mapWrapperRef.current) {
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;

                mapWrapperRef.current.style.left = `${Math.min(
                    Math.max(initialLeft + dx, -mapWrapperRef.current.offsetWidth + (containerRef.current?.offsetWidth || 0)),
                    0
                )}px`;
                mapWrapperRef.current.style.top = `${Math.min(
                    Math.max(initialTop + dy, -mapWrapperRef.current.offsetHeight + (containerRef.current?.offsetHeight || 0)),
                    0
                )}px`;
            }
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
                if (mapWrapperRef.current) {
                    mapWrapperRef.current.style.cursor = 'grab';
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, startY, initialLeft, initialTop]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 0) { 
        setIsDragging(true);
        setStartX(e.clientX);
        setStartY(e.clientY);
        if (mapWrapperRef.current) {
            setInitialLeft(parseInt(getComputedStyle(mapWrapperRef.current).left, 10));
            setInitialTop(parseInt(getComputedStyle(mapWrapperRef.current).top, 10));
            mapWrapperRef.current.style.cursor = 'grabbing';
        }
    }
};

    const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault(); 
    };

    return (
        <div className={styles.container} ref={containerRef}>
            <div
                className={styles.mapWrapper}
                ref={mapWrapperRef}
                onMouseDown={handleMouseDown}
                style={{ position: 'absolute', cursor: 'grab' }} // Убедитесь, что у вас есть стиль для позиционирования
            >
                <img
                    src={mapSrc}
                    alt="Map"
                    className={styles.mapImage}
                    draggable={false} // Отключаем перетаскивание браузером
                    onDragStart={handleDragStart} // Отключаем перетаскивание
                />
            </div>
        </div>
    );
};

export default MapViewer;
