import './drag-card.styles.scss';

const DragCard = ({ handleDragStart, handleDragEnd }) => {
  return (
    <div
      className="drag-box"
      draggable="true"
      onDrag={handleDragStart}
      onDragEnd={handleDragEnd}
    ></div>
  );
};

export default DragCard;
