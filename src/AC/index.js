export function win (count, deck) {
  return {
    type: ROUND_WIN,
    deck,
    count
  }
}

export function lose (count) {
	return {
    type: ROUND_LOSE,
    count
	}
}