type Props = {
    label: '-' | '+'
    title: string
    onClick: () => void
}

export const QuantityButton = ({ label, title, onClick }: Props) => {
    return (
        <button
            title={title}
            className={`${label === '+' ? 'ml-2' : 'mr-2'} cursor-pointer`}
            aria-label={title}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
