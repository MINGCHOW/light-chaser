import AbstractDrag from "./AbstractDrag";

export default class CommonDragger extends AbstractDrag {

    protected position: { x: number, y: number } = {x: 50, y: -window.innerHeight + 50}; // 第一个点坐标

    constructor(target: any, dragTarget: any) {
        super();
        this.target = target;
        this.dragTarget = dragTarget;
        this.registerDragger();
    }

    protected onDragEnd = (): void => {
        this.dragTarget.addEventListener('pointerup', (e: any) => {
            if (e.button === 0) {
                this.dragTarget.releasePointerCapture(e.pointerId);
                this.dragTarget.removeEventListener('pointermove', this.onDragMove);
            }
        });
    }

    protected onDragMove = (e: any): void => {
        this.position.x += e.movementX;
        this.position.y += e.movementY;
        this.target.style.transform = 'translate(' + this.position.x + 'px, ' + this.position.y + 'px)';
    }

    protected onDragStart = (): void => {
        this.dragTarget.addEventListener('pointerdown', (e: any) => {
            if (e.button === 0) {
                this.dragTarget.setPointerCapture(e.pointerId);
                this.dragTarget.addEventListener('pointermove', this.onDragMove);
            }
        });
    }

}