import profilePhoto from '@assets/img/profile.jpeg'
import { useTranslation } from 'react-i18next'
import Translate from '@components/Translate'
import ButtonPrint from '@components/ButtonPrint';
export default function Header () {
    const { t } = useTranslation()

    return (
        <header className="pt-6 print:pt-0">
            <div className="mx-auto container max-w-screen-md">
                <div className="md:flex print:flex">
                    <div className="relative w-40 mx-auto mb-6 md:mb-0">
                        <img src={ profilePhoto } alt="Luciano Braga" className="rounded-full w-full" />
                        <div className="w-full mt-4 print:hidden">
                            <Translate />
                        </div>
                    </div>
                    <div className="md:ml-8 print:ml-4 py-2 flex-1 px-4 md:pl-0">
                        <h1 className="text-4xl text-neutral-600 uppercase relative"><span className="font-semibold">Robson</span> Wendel
                            <ButtonPrint id="btn-print-cv" className="btn-print-cv" />
                        </h1>
                        <h5 className="text-xl text-neutral-600 uppercase font-light py-2">{ t("resume.profile.title") }</h5>
                        <p className="text-neutral-500 text-sm text-justify">{ t("resume.profile.description") }</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
