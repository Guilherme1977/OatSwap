import { MenuEntry } from '@oatswap/oatswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://oatswap.org/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://oatswap.org/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://oatswap.org/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://pancakeswap.finance/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xff9d1a4bc6cfd3d6b9e5217f01571340e4a5ff1e',
      },
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0xff9d1a4bc6cfd3d6b9e5217f01571340e4a5ff1e',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.oatswap.org',
      },
      {
        label: 'Github',
        href: 'https://github.com/oatswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.oatswap.org',
      },
      {
        label: 'Blog',
        href: 'https://oatswap.medium.com',
      },
    ],
  },
]

export default config
