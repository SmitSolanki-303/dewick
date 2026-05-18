import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none select-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-transparent hover:bg-white/90",
        outline:
          "bg-transparent border-white/10 text-white hover:border-white/20 hover:bg-white/[0.03]",
        secondary:
          "bg-zinc-900/50 text-white border-white/10 hover:bg-zinc-900 hover:border-white/20",
        ghost:
          "bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.03]",
        destructive:
          "bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20 hover:border-red-500/30",
        link: "bg-transparent border-transparent text-blue-500 underline-offset-4 hover:underline hover:scale-100",
      },
      size: {
        default:
          "py-2 px-4 gap-2 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "py-1 px-2 gap-1 rounded-lg text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "py-1.5 px-3 gap-1.5 rounded-lg text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "py-3 px-6 gap-2 text-base has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "p-2",
        "icon-xs": "p-1 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "p-1.5 rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
