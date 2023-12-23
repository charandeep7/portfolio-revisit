import { profiles } from "@/lib/constants"

export default function Footer(){
    return (
        <div className="flex flex-col justify-center items-center gap-1 mt-2 text-sm tracking-wide">
            <p className="text-red-600">@{new Date().getFullYear()} Charandeep Kumar (KITISH)</p>
            <div className="flex space-x-2">
                {profiles.map((profile) => (
                    <a key={profile.id} href={profile.url} target="_blank" className="first-letter:text-primary-foreground hover:underline hover:text-primary-foreground">{profile.name}</a>
                ))}
            </div>
            <p className="mb-2">Designed by{" "}<span className="text-red-600">@me</span> </p>
        </div>
    )
}