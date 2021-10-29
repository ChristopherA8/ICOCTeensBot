module.exports = {
  async listen(message) {
    if (message.channel.id !== "859092792332517396") return; // Polls channel

    const unicodeEmojiRegex =
      /^(\p{RI}\p{RI}|\p{Emoji}(\p{Emoji_Modifier_Base}|\uFE0F\u20E3?|[\u{E0020}-\u{E007E}]+\u{E007F})?(\u{200D}\p{Emoji}(\p{Emoji_Modifier_Base}|\uFE0F\u20E3?|[\u{E0020}-\u{E007E}]+\u{E007F})?)*)/gu;

    // Resolves emojis (unicode and discord) at the start of a line
    const getEmojis = (lines, bot) => {
      const isAvailableDiscordEmoji = (id) => bot.emojis.cache.has(id);
      const discordEmojiRegex = /^<:.*?:(.*?)>/;

      const result = [];
      for (const line of lines) {
        const unicodeMatch = line.match(unicodeEmojiRegex);
        if (unicodeMatch) {
          result.push(unicodeMatch[0]);
          continue;
        }

        const discordMatch = line.match(discordEmojiRegex);
        if (discordMatch && isAvailableDiscordEmoji(discordMatch[1])) {
          result.push(discordMatch[1]);
        }
      }

      return result.filter((emoji) => {
        const isNumber = /^\d$/.test(emoji);
        return !isNumber;
      });
    };

    const letterToEmoji = (letter) => {
      const unicodeOffset = 0x1f1e6; //Regional Indicator A
      const asciiOffset = "A".charCodeAt(0);

      if (letter === "B") return "🅱️";
      const letterIndex = letter.charCodeAt(0) - asciiOffset;
      const unicodeCodePoint = unicodeOffset + letterIndex;
      return String.fromCodePoint(unicodeCodePoint);
    };

    // Resolves single letters at the start of a line and returns their unicode version
    const getLetterEmojis = (lines) => {
      return lines
        .map((line) => line.toUpperCase().split(/\b/)[0])
        .filter((firstWord) => firstWord.match(/^[A-Z]$/))
        .map(letterToEmoji);
    };

    const resolveEmojis = (lines, bot) => {
      const emojiEmojis = getEmojis(lines, bot);

      if (emojiEmojis && emojiEmojis.length > 0) {
        return emojiEmojis;
      }

      const letterEmojis = getLetterEmojis(lines);
      if (letterEmojis && letterEmojis.length > 0) {
        return letterEmojis;
      }

      // return ["A", "B"].map(letterToEmoji);
      return;
    };

    const partition = (items, size) => {
      const output = [];

      for (let i = 0; i < items.length; i += size) {
        output.push(items.slice(i, i + size));
      }

      return output;
    };

    const removeSpecialCharactersFromBeginning = (content) => {
      return content.replace(/^\p{P}*/u, "");
    };

    const lines = message.cleanContent.split("\n");
    const resolvedEmojis = resolveEmojis(
      lines.map(removeSpecialCharactersFromBeginning),
      message.client
    );
    if (!resolvedEmojis) return;
    const unique = resolvedEmojis.filter(
      (e, i) => resolvedEmojis.indexOf(e) === i
    );
    const partitioned = partition(unique, 20);

    for (let i = 0; i < partitioned.length; i++) {
      const reactMessage =
        i === 0 ? message : await message.channel.send("More options");

      const partition = partitioned[i];
      for (const emoji of partition) {
        await reactMessage.react(emoji);
      }
    }
  },
};
