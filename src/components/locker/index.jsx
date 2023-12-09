import "./locker.css"

const Locker = () => {

    const items = [
        { name: 'Armor', link: '/armor-page' },
        { name: 'Guns', link: '/guns-page' },
        { name: 'Ghosts', link: '/ghosts-page' },
        { name: 'Sparrows', link: '/sparrows-page' },
        { name: 'Ships', link: '/ships-page' },
        { name: 'Currency', link: '/currency-page' },
        { name: 'Banners', link: '/banners-page' },
        // Add more items as needed
      ];

  return (
    <>
    <section className="locker-container">
    <div className="item-chart">
      {items.map((item, index) => (
        <a key={index} href={item.link} className="item">
          {item.name}
        </a>
      ))}
    </div>
    </section>

    </>
  )
}

export default Locker