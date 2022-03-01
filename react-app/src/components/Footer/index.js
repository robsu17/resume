import { useTranslation } from 'react-i18next'
import GitHubButton from 'react-github-btn'
export default function Footer () {
    const { t, i18n } = useTranslation()

    return (
        <footer className="py-4 px-4 mt-4 flex inline-block text-xs justify-center space-x-4  align-middle mx-auto max-w-screen-md border-t border-neutral-200">
            <div className='text-neutral-400'>
                { t("resume.footer.available_in") } <a href='https://lucianobragaweb.github.io/resume' className='text-blue-500'>lucianobragaweb.github.io/resume</a>
            </div>
            <GitHubButton href="https://github.com/lucianobragaweb" data-show-count="true" aria-label="Follow @lucianobragaweb on GitHub">@lucianobragaweb</GitHubButton>
            <GitHubButton href="https://github.com/lucianobragaweb/resume/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork lucianobragaweb/resume on GitHub">Fork</GitHubButton>
            <GitHubButton href="https://github.com/lucianobragaweb/resume/issues" data-icon="octicon-issue-opened" data-show-count="true" aria-label="Issue lucianobragaweb/resume on GitHub">Issue</GitHubButton>
            <GitHubButton href="https://github.com/lucianobragaweb/resume" data-icon="octicon-star" data-show-count="true" aria-label="Star lucianobragaweb/resume on GitHub">Star</GitHubButton>
        </footer>
    )
}
