import { useEffect, useState } from 'react'

const Wizard = ({ onComplete, pages, titles }) => {
    const [page, setPage] = useState(0)

    useEffect(() => {
        if (page === pages.length) {
            onComplete()
        }
    }, [page, pages, onComplete])

    return <div>
        <div>
            <span>{page + 1}/{pages.length}</span>
            <h1>{titles[page]}</h1>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
        {pages[page]}
    </div>
}

export default Wizard