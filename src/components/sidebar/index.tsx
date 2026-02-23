'use client'
import Link from 'next/link'

import { useState } from 'react'

import { MenuIcon } from 'lucide-react'

import { ActionButtons } from '@/components/action-buttons'
import { Button } from '@/components/ui/button'
import { DoubleButton } from '@/components/ui/double-button'
import { Drawer } from '@/components/ui/drawer'

import { SidebarItem } from './sidebar-item'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger asChild>
        <nav className="mx-auto flex w-full justify-center p-4">
          <Button className="fixed bottom-3 rounded-full">
            <MenuIcon />
          </Button>
        </nav>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header className="sr-only">
          <Drawer.Title>The One Linked</Drawer.Title>
        </Drawer.Header>
        <main className="mx-auto mb-4 flex w-full max-w-xs flex-col">
          <SidebarItem>
            <DoubleButton
              className="w-full"
              onClick={() => setIsOpen(false)}
              nativeButton={false}
              render={<Link href="/">Home</Link>}
            />
          </SidebarItem>
          <SidebarItem>
            <ActionButtons className="mt-2" onClose={() => setIsOpen(false)} />
          </SidebarItem>
        </main>
      </Drawer.Content>
    </Drawer.Root>
  )
}
