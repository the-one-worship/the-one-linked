'use client'

import * as React from 'react'

import { Drawer as DrawerPrimitive } from '@base-ui/react/drawer'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/class-name'

type DrawerSwipeDirection = NonNullable<
  DrawerPrimitive.Root.Props['swipeDirection']
>

const DrawerSwipeDirectionContext =
  React.createContext<DrawerSwipeDirection>('down')

function useDrawerSwipeDirection() {
  return React.useContext(DrawerSwipeDirectionContext)
}

function Drawer({
  swipeDirection = 'down',
  ...props
}: DrawerPrimitive.Root.Props) {
  return (
    <DrawerSwipeDirectionContext.Provider value={swipeDirection}>
      <DrawerPrimitive.Root swipeDirection={swipeDirection} {...props} />
    </DrawerSwipeDirectionContext.Provider>
  )
}

function DrawerTrigger({ ...props }: DrawerPrimitive.Trigger.Props) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({ ...props }: DrawerPrimitive.Portal.Props) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: DrawerPrimitive.Backdrop.Props) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-overlay"
      className={cn(
        'bg-background/50 z-dialog fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ease-out data-[ending-style]:opacity-0 data-[starting-style]:opacity-0',
        className
      )}
      {...props}
    />
  )
}

const drawerViewportVariants = cva('z-dialog fixed inset-0 flex', {
  variants: {
    swipeDirection: {
      up: 'flex-col justify-start',
      down: 'flex-col justify-end',
      left: 'flex-row justify-start',
      right: 'flex-row justify-end',
    },
  },
})

const drawerContentVariants = cva(
  'group/drawer-content bg-background flex flex-col shadow-lg outline-none transition-transform duration-300 ease-out data-[swiping]:transition-none',
  {
    variants: {
      swipeDirection: {
        up: 'rounded-b-force-4xl mb-24 h-auto max-h-[80vh] w-full border-b [transform:translateY(var(--drawer-swipe-movement-y,0px))] data-[ending-style]:[transform:translateY(-100%)] data-[starting-style]:[transform:translateY(-100%)]',
        down: 'rounded-t-force-4xl mt-24 h-auto max-h-[80vh] w-full border-t [transform:translateY(var(--drawer-swipe-movement-y,0px))] data-[ending-style]:[transform:translateY(100%)] data-[starting-style]:[transform:translateY(100%)]',
        left: 'h-full w-3/4 border-r [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-[ending-style]:[transform:translateX(-100%)] data-[starting-style]:[transform:translateX(-100%)] sm:max-w-sm',
        right:
          'h-full w-3/4 border-l [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-[ending-style]:[transform:translateX(100%)] data-[starting-style]:[transform:translateX(100%)] sm:max-w-sm',
      },
    },
  }
)

function DrawerContent({
  className,
  overlayClassName,
  forceOverlay,
  allowOutsidePointerEvents = false,
  children,
  ...props
}: DrawerPrimitive.Popup.Props & {
  overlayClassName?: string
  forceOverlay?: boolean
  /**
   * Lets pointer events pass through the full-screen viewport to elements
   * behind the drawer, so the popup and the page stay simultaneously
   * interactive. Pair with a `pointer-events-none` overlay. Outside presses no
   * longer dismiss the drawer — close via swipe or an explicit close control.
   */
  allowOutsidePointerEvents?: boolean
}) {
  const swipeDirection = useDrawerSwipeDirection()

  return (
    <DrawerPortal>
      <DrawerOverlay forceRender={forceOverlay} className={overlayClassName} />
      <DrawerPrimitive.Viewport
        className={cn(
          drawerViewportVariants({ swipeDirection }),
          allowOutsidePointerEvents && 'pointer-events-none'
        )}
      >
        <DrawerPrimitive.Popup
          data-slot="drawer-content"
          data-swipe-direction={swipeDirection}
          className={cn(
            drawerContentVariants({ swipeDirection }),
            allowOutsidePointerEvents && 'pointer-events-auto',
            className
          )}
          {...props}
        >
          {swipeDirection === 'down' && (
            <div className="bg-muted mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full" />
          )}
          {children}
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[swipe-direction=down]/drawer-content:text-center group-data-[swipe-direction=up]/drawer-content:text-center md:gap-1.5 md:text-left',
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: DrawerPrimitive.Description.Props) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Drawer as Root,
  DrawerPortal as Portal,
  DrawerOverlay as Overlay,
  DrawerTrigger as Trigger,
  DrawerClose as Close,
  DrawerContent as Content,
  DrawerHeader as Header,
  DrawerFooter as Footer,
  DrawerTitle as Title,
  DrawerDescription as Description,
}
