'use client'
import Link from 'next/link'

import { MenuIcon } from 'lucide-react'

import { ActionButtons } from '@/components/action-buttons'
import { DoubleButton } from '@/components/ui/double-button'
import { Drawer } from '@/components/ui/drawer'
import { LiquidGlassButton } from '@/components/ui/liquid-glass-button'

import { SidebarItem } from './sidebar-item'

export function Sidebar() {
  return (
    <Drawer.Root>
      <Drawer.Trigger
        nativeButton={false}
        render={<nav className="mx-auto flex w-full justify-center p-4" />}
      >
        <LiquidGlassButton className="fixed bottom-3 rounded-full" size="xl">
          <MenuIcon />
        </LiquidGlassButton>
      </Drawer.Trigger>
      <Drawer.Content className="rounded-t-force-4xl">
        <Drawer.Header className="sr-only">
          <Drawer.Title>The One Linked</Drawer.Title>
        </Drawer.Header>
        <Drawer.Close
          nativeButton={false}
          render={
            <main className="mx-auto mb-4 flex w-full max-w-xs flex-col" />
          }
        >
          <SidebarItem>
            <DoubleButton
              className="w-full"
              nativeButton={false}
              render={<Link href="/">Home</Link>}
            />
          </SidebarItem>
          <SidebarItem>
            <ActionButtons className="mt-2" />
          </SidebarItem>
        </Drawer.Close>
      </Drawer.Content>
    </Drawer.Root>
  )
}
