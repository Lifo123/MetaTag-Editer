import './Styles/Index.css'
import { Suspense, lazy, useEffect } from 'react'

import Coding from '../../Components/Coding/Coding'
import Result from '../../Components/Result/Result'
const SplitterContainer = lazy(() => import('../../Components/Splitter/SplitterContainer'));


export default function Index({ setProgress }) {
    // Global States

    // Effects
    useEffect(() => {
        setProgress(30);
        setTimeout(() => {
            setProgress(100);
        }, 200);
    }, [setProgress]);

    return (
        <>
            <main className='app-render fixed h-100 w-100'>
                <Suspense fallback={<p>Loading...</p>}>
                    <SplitterContainer type={window.innerWidth < 840 ? 'vertical' : 'horizontal'} base={window.innerWidth < 840 ? 40 : 48}>
                        <Coding />
                        <Result />
                    </SplitterContainer>
                </Suspense>
            </main>
        </>
    );
}
