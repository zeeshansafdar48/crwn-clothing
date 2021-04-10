import './collection-preview.styles.scss';

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items &&
          items
            .filter((item, index) => index < 4)
            .map((item) => <div key={item.id}>{item.name}</div>)}
      </div>
    </div>
  );
}
