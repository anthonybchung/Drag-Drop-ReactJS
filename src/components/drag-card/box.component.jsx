import './drag-card.styles.scss';

const Box = ({
  children,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDragDrop,
  keyID,
}) => {
  return (
    <div
      id={keyID}
      className="empty"
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDragDrop}
    >
      {children}
    </div>
  );
};

export default Box;
