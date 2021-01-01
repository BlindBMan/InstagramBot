import React, {useEffect} from 'react'


const ImportScript = resourceUrl => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = resourceUrl
        script.async = true
        document.body.append(script)
    }, [])
}

export default ImportScript
