import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { TbBrandGithub, TbBrandGithubFilled, TbMail, TbMailFilled, TbWorld } from "react-icons/tb";

export default function MeetTheTeam() {
    return (
        <section id="team" className="flex flex-col mt-16 w-[90%] max-w-[1200px] mx-auto">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl font-semibold mx-auto mt-20">Meet The Team</h1>
                <p className="mt-4 text-lg md:w-1/2 w-3/4 mx-auto text-center">We're a group of passionate students from TJHSST committed to creating a platform for anyone to use.</p>
            </div>
            <div className="group-picture w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[58%] mt-6 sm:mt-8 md:mt-10 border-4 border-dashed rounded-lg mx-auto">
                <Image 
                    src="/group-pic.png" 
                    alt="Group picture including all the team members. From left to right, Bryce, Ethan, Robert, Zinning" 
                    width={690} 
                    height={500} 
                    className="w-full h-auto rounded-lg object-cover" 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 75vw, (max-width: 1280px) 65vw, 58vw"
                />
            </div>
            <p className="mx-auto text-zinc-400 text-xs sm:text-sm mt-2">(from left, Bryce Conrad, Ethan You, Robert Zhao, Zinning Huang)</p>
            { /* group member descriptions */ }
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-5 mx-auto mt-10">
                <div className="flex flex-col md:flex-row gap-x-5 gap-y-5">
                    {/* shuddup bryce, ik this can be a component */}
                    <div className="flex flex-col w-70 h-50 bg-blue-200 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 duration-200">
                        <div className="m-1 bg-white rounded-lg h-full drop-shadow-xl">
                            <div className="card-content flex flex-col px-10 pt-3 gap-y-3">
                                <h1 className="font-semibold text-xl mt-5 text-blue-900">Bryce Conrad</h1>
                                {/* socials */}
                                <a href="https://github.com/makors" className="website-link flex flex-row">
                                    <TbBrandGithubFilled className="text-zinc-500 w-5 h-5 mr-1 mt-1 text-sm" />
                                    <span className="text-sm mt-1 text-zinc-500">makors</span>
                                </a>
                                <a href="mailto:bryce@readme.sh" className="website-link flex flex-row">
                                    <TbMailFilled className="text-zinc-500 w-5 h-5 mr-1 mt-1 text-sm" />
                                    <span className="text-sm mt-1 text-zinc-500">bryce@readme.sh</span>
                                </a>
                            </div>
                        </div>
                        <p className="mx-auto py-1 text-sm text-blue-800">APP LEAD</p>
                    </div>
                    <div className="flex flex-col w-70 h-50 bg-green-200 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 duration-200">
                        <div className="m-1 bg-white rounded-lg h-full drop-shadow-xl">
                            <div className="card-content flex flex-col px-10 pt-3 gap-y-3">
                                <h1 className="font-semibold text-xl mt-5 text-green-900">Ethan You</h1>
                                {/* socials */}
                                <a href="https://github.com/Pwngo" className="website-link flex flex-row">
                                    <TbBrandGithubFilled className="text-zinc-500 w-5 h-5 mr-1 mt-1 text-sm" />
                                    <span className="text-sm mt-1 text-zinc-500">Pwngo</span>
                                </a>
                                <a href="mailto:ethan.bo.you@gmail.com" className="website-link flex flex-row">
                                    <TbMailFilled className="text-zinc-500 w-5 h-5 mr-1 mt-1 text-sm" />
                                    <span className="text-sm mt-1 text-zinc-500">ethan.bo.you@gmail.com</span>
                                </a>
                            </div>
                        </div>
                        <p className="mx-auto py-1 text-sm text-green-800">OUTREACH, PROGRAMMER</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-x-5 gap-y-5">
                    <div className="flex flex-col w-70 h-50 bg-red-200 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 duration-200">
                        <div className="m-1 bg-white rounded-lg h-full drop-shadow-xl">
                            <div className="card-content flex flex-col px-10 pt-3 gap-y-3">
                                <h1 className="font-semibold text-xl mt-5 text-red-900">Robert Zhao</h1>
                                {/* socials */}
                                <a href="https://github.com/deR0R0" className="website-link flex flex-row">
                                    <TbBrandGithubFilled className="text-zinc-500 w-5 h-5 mr-1 mt-1 text-sm" />
                                    <span className="text-sm mt-1 text-zinc-500">deR0R0</span>
                                </a>
                                <a href="mailto:me@robertzhao.dev" className="website-link flex flex-row">
                                    <TbMailFilled className="text-zinc-500 w-5 h-5 mr-1 mt-1 text-sm" />
                                    <span className="text-sm mt-1 text-zinc-500">me@robertzhao.dev</span>
                                </a>
                            </div>
                        </div>
                        <p className="mx-auto py-1 text-sm text-red-800">FOUNDER, PROGRAMMER</p>
                    </div>
                    <div className="flex flex-col w-70 h-50 bg-yellow-100 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 duration-200">
                        <div className="m-1 bg-white rounded-lg h-full drop-shadow-xl">
                            <div className="card-content flex flex-col px-10 pt-3 gap-y-3">
                                <h1 className="font-semibold text-xl mt-5 text-yellow-900">Zining Huang</h1>
                                {/* socials */}
                                <a href="https://github.com/Zirrona" className="website-link flex flex-row">
                                    <TbBrandGithubFilled className="text-zinc-500 w-5 h-5 mr-1 mt-1 text-sm" />
                                    <span className="text-sm mt-1 text-zinc-500">Zirrona</span>
                                </a>
                                <a href="mailto:zining555@gmail.com" className="website-link flex flex-row">
                                    <TbMailFilled className="text-zinc-500 w-5 h-5 mr-1 mt-1 text-sm" />
                                    <span className="text-sm mt-1 text-zinc-500">zining555@gmail.com</span>
                                </a>
                            </div>
                        </div>
                        <p className="mx-auto py-1 text-sm text-yellow-800">APP PROGRAMMER</p>
                    </div>
                </div>
            </div>
        </section>
    )
}