import { createFileRoute } from '@tanstack/react-router'
import { useMutation } from 'convex/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { convexQuery } from '@convex-dev/react-query'
import { api } from '../../convex/_generated/api'
import milady from '/milady.jpg?url'
import { Button } from '../components/ui/button'
import funFacts from '../facts.ts'
import { useEffect, useState, type ChangeEvent } from 'react'
import remilia from '/remilia.webp?url'
import discord from '/discord.svg?url'
import github from '/github.svg?url'
import ethereum from '/ethereum.svg?url'
import x from '/x.svg?url'
import { Input } from '../components/ui/input'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [text, setText] = useState('loading...')
  const { data } = useSuspenseQuery(convexQuery(api.myFunctions.getCount, {}))

  const sayMilady = useMutation(api.myFunctions.milady)

  function reroll() {
    const rand = Math.floor(Math.random() * funFacts.length)
    console.log(rand)
    if (funFacts[rand] != text) {
      setText(funFacts[rand])
    } else {
      reroll()
    }
  }

  useEffect(() => {
    reroll()
  }, [])

  const [miladyValue, setMiladyValue] = useState('')

  function miladyChange(e: ChangeEvent<HTMLInputElement>) {
    if (
      e.target.value == 'm' ||
      e.target.value == 'mi' ||
      e.target.value == 'mil' ||
      e.target.value == 'mila' ||
      e.target.value == 'milad' ||
      e.target.value == 'milady' ||
      e.target.value == ''
    )
      setMiladyValue(e.target.value)
  }

  useEffect(() => {
    if (miladyValue == 'milady') {
      setMiladyValue('')
      sayMilady()
    }
  }, [miladyValue])

  return (
    <div className="mx-2 my-16">
      <div className="p-6 max-w-3xl mx-auto bg-background text-foreground space-x-4">
        <figure className="text-center xs:float-left">
          <img src={milady} className="w-48 mx-auto" />
          <figcaption>
            <a href="https://opensea.io/item/ethereum/0x5af0d9827e0c53e4799bb226655a1de152a425a5/157">
              milady #157 ^.^
            </a>
          </figcaption>
        </figure>
        <div className="space-y-2">
          <h1 className="text-4xl">hi hellloooo im lyn</h1>
          <p className="italic text-foreground/50 text-sm">
            other names include: alt.box, plume, lynett.eth, lynett simons,
            0xlynett
          </p>
          <ol className="list-['❤_'] list-inside">
            <li>programmator, designer</li>
            <li>far right extremist</li>
            <li>arguably female</li>
            <li>
              <a href="https://www.youtube.com/watch?v=9V6mchoSxNE">
                professional racist
              </a>
            </li>
            <li>milady milady milady</li>
            <li>etherean free-market cryptoanarchist</li>
            <li>
              building <a href="https://seerboard.com">Seerboard</a>
            </li>
          </ol>
          <div className="clear-both" />
          <div>
            people have typed milady {data} {data > 1 ? 'times' : 'time'} so
            far. say milady!
          </div>
          <Input
            value={miladyValue}
            placeholder="milady"
            onChange={miladyChange}
          />
        </div>
      </div>

      <div className="p-6 max-w-3xl mx-auto mt-4 bg-background text-foreground space-y-4">
        <div className="min-h-40 bg-yellow-800/40 p-2 border-l flex flex-col justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold">FUN FACT</h2>
            <p>{text}</p>
          </div>
          <Button className="w-fit" onClick={reroll}>
            reroll fun fact
          </Button>
        </div>
      </div>

      <div className="p-6 max-w-3xl mx-auto mt-4 bg-background text-foreground space-y-4">
        <h1 className="font-bold text-2xl">socials</h1>
        <ol className="grid grid-rows-3 grid-flow-col gap-2">
          <li>
            <img src={discord} className="h-6 inline mr-2" />
            <span className="hidden sm:inline">discord: </span>
            <span>alt.box</span>
          </li>
          <li>
            <img src={ethereum} className="h-8 inline mx-1 mr-4" />
            <span className="hidden sm:inline">ethereum: </span>
            <span>
              <a href="https://etherscan.io/address/lynett.eth">lynett.eth</a>
            </span>
          </li>
          <li>
            <img src={x} className="h-6 inline ml-1 mr-3" />
            <span className="hidden sm:inline">x: </span>
            <span>
              <a href="https://x.com/lynettdoteth">lynettdoteth</a>
            </span>
          </li>
          <li>
            <img src={remilia} className="h-6 inline mr-2" />
            <span className="hidden sm:inline">remilia: </span>
            <span>
              <a href="https://remilia.com/~lyn">~lyn</a>
            </span>
          </li>
          <li>
            <img src={github} className="h-6 inline mr-2" />
            <span className="hidden sm:inline">github: </span>
            <span>
              <a href="https://github.com/0xlynett">0xlynett</a>
            </span>
          </li>
        </ol>
      </div>

      <div className="p-6 max-w-3xl mx-auto mt-4 bg-background text-foreground space-y-4">
        <h1 className="font-bold text-2xl">public projects</h1>

        <ol className="list-['❤_'] list-inside">
          <li>
            <a href="https://seerboard.com">seerboard</a>, a prediction tracker
            for public figures
          </li>
          <li>
            <a href="https://research.2077.xyz">2077 research archive</a>, an
            archive of articles written when 2077 was active
          </li>
          <li>
            <a href="https://github.com/0xlynett/miniamm">miniamm</a>, the
            smallest toy xy=k amm iirc
          </li>
          <li>
            <a href="https://github.com/ArvensisSystems/eth-template">
              eth-template
            </a>
            , a small full-stack ethereum development template
          </li>
          <li>
            <a href="https://github.com/0xlynett/supreme-leader">
              supreme-leader
            </a>
            , an automated Kim Jong-Un test for Discord servers
          </li>
          <li>
            <a href="https://prax.im">P-ID website</a>, for the praxis
            intelligence division
          </li>
        </ol>
      </div>
      <div className="p-6 max-w-3xl mx-auto mt-4 bg-background text-foreground space-y-4">
        <h1 className="font-bold text-2xl">reading list</h1>

        <ol className="list-['❤_'] list-inside">
          <li>
            <a href="https://mises.org/library/book/democracy-god-failed">
              democracy, the god that failed
            </a>{' '}
            by hans-hermann hoppe
          </li>
          <li>
            <a href="https://thenetworkstate.com">the network state</a> by
            balaji srinivasan
          </li>
          <li>
            <a href="https://mises.org/library/book/human-action">
              human action
            </a>{' '}
            by ludwig von mises
          </li>
          <li>
            <a href="https://lesswrong.com/rationality">the sequences</a> by
            eliezer yudkowsky
          </li>
          <li>
            <a href="https://www.umbraresearch.xyz/writings/futarchy">
              futarchy as trustless joint ownership
            </a>{' '}
            by kevin heavey
          </li>
          <li>
            <a href="https://ethereum.org/whitepaper">ethereum whitepaper</a> by
            vitalik buterin
          </li>
          <li>
            <a href="https://agorist.xyz/">agorism in the 21st century</a> by
            various authors
          </li>
          <li>
            <a href="https://saifedean.com/">the bitcoin standard</a> (+ the
            fiat standard + principles of economics) by saifedean ammous
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/The_Denationalisation_of_Money">
              the denationalisation of money
            </a>{' '}
            by friedrich hayek
          </li>
          <li>
            <a href="https://goldenlight.mirror.xyz/LeUojosmx48SvEfspq1leuRTf7TJfYKJ_TtKpePczzU">
              gold and glory in times of thought chaos
            </a>{' '}
            by charlotte fang
          </li>
          <li>
            <a href="https://paragraph.com/@ethintern/three-to-infinity">
              three to infinity
            </a>{' '}
            by ethereum intern
          </li>
        </ol>
      </div>
      <div className="p-6 max-w-3xl mx-auto mt-4 bg-background text-foreground space-y-4">
        <h1 className="font-bold text-2xl">work</h1>

        <h2 className="font-bold text-xl">lead @ seerboard (2025-)</h2>
        <p>
          building and maintaining a platform to track predictions made by
          public figures.{' '}
          <a href="https://x.com/seerboard/status/1965102277922029936">
            see twitter thread
          </a>
        </p>

        <h2 className="font-bold text-xl">
          sales lead @ altivox networks (2025-)
        </h2>
        <p>
          designed the logo and other brand assets for altivox, ctrlservers &
          sahara compute. currently managing{' '}
          <a href="https://x.com/AltivoxNetworks">the x/twitter account</a> and
          acquired strategic partnership with{' '}
          <a href="https://hyperware.ai">hyperware</a> and other companies. also
          writing technical articles for{' '}
          <a href="https://altivox.net/blog">altivox blog</a>
        </p>

        <h2 className="font-bold text-xl">executive intern @ 2077 labs</h2>
        <p>
          worked on original 2077 landing page, etherpedia, 2077 research and
          general brand assets. led the team as unofficial leader during absence
          of CEO. wrote a recovery module smart contract for safe multisig
        </p>
      </div>
    </div>
  )
}
