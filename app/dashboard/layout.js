export default function DashboardLayout({children}){
    return(
        <>
        <div>
            <ul>
                <li>settings</li>
                <li>analytics</li>
            </ul>
        </div>
        {children}
        </>
    )
}