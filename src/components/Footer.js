import React from 'react'
import '../cssFiles/footer.scss'

function Footer() {
    const date = new Date().getFullYear()
    return (
        <footer>
            <div> Copyright ©  {date} Erik Zábranský<br />
            Website by me...
            </div>
        </footer>
    )
}

export default Footer
