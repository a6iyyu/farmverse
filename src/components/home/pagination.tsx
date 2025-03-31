export function Pagination({ is_active, on_click }: { is_active: boolean; on_click: () => void }) {
  return <button className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${is_active ? "scale-125 bg-white" : "bg-gray-400"} lg:h-3 lg:w-3`} onClick={on_click} />;
}