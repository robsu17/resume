import profilePhoto from '@assets/img/profile.png'
import { useTranslation } from 'react-i18next'
import Translate from '@components/Translate'
import ButtonPrint from '@components/ButtonPrint';
export default function Header () {
    const { t, i18n } = useTranslation()

    return (
        <header className="pt-6">
            <div className="container mx-auto flex max-w-screen-md">
                <div className="w-44">
                    <div className="relative w-44">
                        <img src={profilePhoto} alt="Luciano Braga" className="grayscale rounded-full" />
                        <div className="absolute h-44 w-44 border-4 rounded-full border-opacity-25 border-neutral-900 top-0 left-0"></div>
                        <div className="absolute w-full top-[10rem]">
                            <Translate />
                        </div>
                    </div>
                </div>
                <div className="ml-8 py-2">
                    <h1 className="text-4xl text-neutral-600 uppercase relative"><span className="font-semibold">Luciano</span> Braga <ButtonPrint /></h1>
                    <h5 className="text-xl text-neutral-600 uppercase font-light py-4">{ t("resume.profile.title") }</h5>
                    <p className="text-neutral-500 text-sm text-justify">{ t("resume.profile.description") }</p>
                </div>
            </div>
        </header>
    )
}
