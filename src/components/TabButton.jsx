export default function TabButton({ children, onClick, isSelected }) {
  return <button className={isSelected ? 'active' : undefined} onClick={onClick}>{children}</button>;
}
