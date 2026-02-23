type Props = {
  title?: React.ReactNode
  children: React.ReactNode
}

export function SidebarItem({ title, children }: Props) {
  return (
    <section className="flex flex-col gap-2 p-4">
      <h2 className="font-bold uppercase">{title}</h2>
      {children}
    </section>
  )
}
