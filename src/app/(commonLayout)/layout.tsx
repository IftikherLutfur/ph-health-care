import PublicFooter from "@/components/shared/PublicFooter"
import PublicNavbar from "@/components/shared/PublicNavbar"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const commonLayout = ({children}:any) =>{
    return (
        <>
        <PublicNavbar/>
        {children}
        <PublicFooter/>
        </>
    )
}

export default commonLayout