type RatingNumber = number;

interface EmojiMap {
  [r: number]: string;
}

export const toEmoji = (rating: RatingNumber): string => {
  const emojiMap: EmojiMap = {
    1: '😠',
    2: '😢',
    3: '😐',
    4: '😊',
    5: '😍',
  };
  return emojiMap[rating];
};

const Rating = (rating: RatingNumber) => {
  return <span>{toEmoji(rating)}</span>;
};

export default Rating;
