import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Kartikeya Multispeciality Hospital | Divili, Pithapuram',
      },
      {
        name: 'description',
        content:
          'Kartikeya Multispeciality Hospital in Divili, Pithapuram, Kakinada offers General Medicine, Obstetrics & Gynaecology, and Paediatric care under the direction of Dr. Pasupuleti Santhosh Kumar.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="grain" />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
