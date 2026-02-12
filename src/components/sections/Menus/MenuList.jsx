import Menu from "./Menu";

function MenuList({ tastyMenus }) {
  return (
    <ul className="grid mb-6 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch">
      {tastyMenus.map((tastyMenu) => (
        <Menu tastyMenu={tastyMenu} key={tastyMenu.id} />
      ))}
    </ul>
  );
}

export default MenuList;
