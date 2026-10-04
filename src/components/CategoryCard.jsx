/**
 * CategoryCard
 * @param {string} title
 * @param {string} image
 * @param {string} [href]
 * @param {string} [linkText]
 * @param {string} [bgColor]   - لون خلفية الكارد (افتراضي: أبيض)
 */
export default function CategoryCard({
  title,
  image,
  href = '#',
  linkText = 'Shop Now →',
  bgColor = '#fff',
}) {
  return (
    <div className="category-card" style={{ '--card-bg': bgColor }}>
      <div className="category-card__media">
        <img className="category-card__img" src={image} alt={title} loading="lazy" />
      </div>
      <div className="category-card__body">
        <h3>{title}</h3>
        <a className="category-card__link" href={href}>{linkText}</a>
      </div>
    </div>
  );
}