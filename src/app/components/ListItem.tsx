interface ListItemProps {
  name: string;
  tag: string;
  color: string;
  href?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  name,
  tag,
  color,
  href,
}: ListItemProps) => {
  return (
    
    <a href={href} className={`${href ? " hover:no-underline" : "" } underline decoration-white`}>
      <h1 className=" text-sm text-white">{name}</h1>
      <h2 className=" text-xs" style={{ color: `${color}` }}>
        {tag}
      </h2>
    </a> 

  );
};

export default ListItem;
