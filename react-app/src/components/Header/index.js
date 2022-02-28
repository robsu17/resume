import profilePhoto from '@assets/img/profile.png'
// import { useTranslation } from 'react-i18next'
import Translate from '@components/Translate';
export default function Header () {


    return (
        <header className="flex flex-col pt-6">
            <div className="container mx-auto flex max-w-screen-md">
                <div className="w-44">
                    <div className="relative w-44">
                        <img src={profilePhoto} alt="Luciano Braga" className="grayscale rounded-full" />
                        <div className="absolute h-44 w-44 border-4 rounded-full border-opacity-25 border-neutral-900 top-0 left-0"></div>
                    </div>
                    <div className="mt-4">
                        <Translate />
                    </div>
                </div>
                <div className="ml-8 py-2">
                    <h1 className="text-4xl text-neutral-600 uppercase"><span className="font-semibold">Luciano</span> Braga</h1>
                    <h5 className="text-xl text-neutral-600 uppercase font-light py-4">Senior Software Developer</h5>
                    <p className="text-neutral-500 text-sm text-justify">Desenvolvedor desde 2007, sempre com grande interesse na resolução de problemas cotidianos através da tecnologia, principalmente a programação de computadores, utilizando linguagens para Web, Mobile ou Desktop.</p>
                </div>
            </div>
        </header>
    )
}
