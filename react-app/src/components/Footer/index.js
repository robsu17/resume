export default function Footer () {
    return (
        <footer className="py-2 px-4 mt-4 flex mx-auto max-w-screen-md border-t border-neutral-300">
            <div className="flex-none w-48 text-xl uppercase">
            Hobbies
            </div>
            <div className="grow">
            <ul className="flex gap-x-8 uppercase font-semibold text-neutral-500">
                <li>Design</li>
                <li>Music</li>
                <li>Books</li>
                <li>Test</li>
            </ul>
            </div>
        </footer>
    )
}