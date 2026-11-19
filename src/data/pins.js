const pins = [
  { id: 'id1', title: 'title1', category: 'category1' },
  { id: 'id2', title: 'title2', category: 'category1' },
  { id: 'id3', title: 'title3', category: 'category2' },
  { id: 'id4', title: 'title4', category: 'category2' },
].map((pin, index) => ({
  ...pin,
  image: {
    uri: `https://placehold.co/500x500/F4F2F0/696466/png?`,
  },
}));

export default pins;