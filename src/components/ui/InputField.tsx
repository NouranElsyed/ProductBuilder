import { Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
interface IProps
{
  label:string
}
export const InputField=({label}:IProps)=>{
  return (
    <div className="w-full max-w-md px-4 my-3">
      <Field>
        <Label className="text-sm/6 font-medium text-black">{label}</Label>
        <Input
         className={clsx(
          'block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
        )}
        />
      </Field>
    </div>
  )
}
