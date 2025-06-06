interface StatusUpdate {
  id: string;
  date: string;
  time: string;
  message: string;
  type: 'positive' | 'negative' | 'neutral';
  models?: string[];
  apiType: 'stable' | 'beta';
}

export const statusUpdates: StatusUpdate[] = [
  {
    id: 'reactivation-1',
    date: 'Jun 6',
    time: '12:00 IST',
    message: 'Converso AI has been successfully reactivated with enhanced stability and performance improvements. All systems are operational and ready for use.',
    type: 'positive',
    models: ['System'],
    apiType: 'stable'
  }
];
