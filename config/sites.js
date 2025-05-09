const SITES = {
  'tesco.buffalotrace-golf.com': {
    startDate: '2025-04-08T23:01:00Z', // 00:01 BST on 9 April
    endDate:   '2025-06-10T22:59:00Z', // 23:59 BST on 10 June
    formVersion: '1',
    theme: 'bt-golf-tesco',
  },
  'buffalo-trace-golf-tesco.vercel.app': {
    startDate: '2025-01-08T23:01:00Z',
    endDate:   '2025-12-10T22:59:00Z',
    formVersion: '1',
    theme: 'bt-golf-tesco',
  },
  'retail.buffalotrace-golf.com': {
    startDate: '2025-04-09T23:01:00Z', // 00:01 BST on 10 April
    endDate:   '2025-06-30T22:59:00Z', // 23:59 BST on 30 June
    formVersion: '2',
    theme: 'bt-golf-supervalu-dunnes',
  },
  'buffalo-trace-golf-retail.vercel.app': {
    startDate: '2025-01-09T23:01:00Z',
    endDate:   '2025-12-30T22:59:00Z',
    formVersion: '2',
    theme: 'bt-golf-supervalu-dunnes',
  },
  'trade.buffalotrace-golf.com': {
    startDate: '2025-04-29T23:01:00Z', // 00:01 BST on 30 April
    endDate:   '2025-07-31T22:59:00Z', // 23:59 BST on 31 July
    formVersion: '1',
    theme: 'bt-golf-on-trade',
  },
  'buffalo-trace-golf-trade.vercel.app': {
    startDate: '2025-01-09T23:01:00Z',
    endDate:   '2025-12-02T22:59:00Z',
    formVersion: '1',
    theme: 'bt-golf-on-trade',
  },
  'ot.winwithbuffalotrace-rugby.co.uk': {
    startDate: '2025-04-09T23:01:00Z', // 00:01 BST on 10 April
    endDate:   '2025-06-02T22:59:00Z', // 23:59 BST on 2 June
    formVersion: '1',
    theme: 'bt-rugby-on-trade',
  },
  'buffalo-trace-rugby-trade.vercel.app': {
    startDate: '2025-01-09T23:01:00Z',
    endDate:   '2025-12-02T22:59:00Z',
    formVersion: '1',
    theme: 'bt-rugby-on-trade',
  },
  'winwithbuffalotrace-rugby.co.uk': {
    startDate: '2025-04-09T23:01:00Z', // 00:01 BST on 10 April
    endDate:   '2025-06-02T22:59:00Z', // 23:59 BST on 2 June
    formVersion: '4',
    theme: 'bt-rugby-off-trade',
  },
  'buffalo-trace-rugby-offtrade.vercel.app': {
    startDate: '2025-01-09T23:01:00Z',
    endDate:   '2025-12-02T22:59:00Z',
    formVersion: '4',
    theme: 'bt-rugby-off-trade',
  },
  default: {
    startDate: '2025-01-08T23:01:00Z', // fallback aligned with Tesco Golf
    endDate:   '2025-12-10T22:59:00Z',
    formVersion: '4',
    theme: 'bt-rugby-off-trade',
  },
};

export default SITES;
