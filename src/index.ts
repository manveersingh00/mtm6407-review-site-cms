export default {
  async register() { },

  async bootstrap({ strapi }) {
    const existingReviews = await strapi.entityService.findMany('api::review.review');

    if (existingReviews.length === 0) {
      const reviews = [
        {
          title: "The Shawshank Redemption",
          slug: "the-shawshank-redemption",
          rating: 9.3,
          content: "An extraordinary tale of hope, friendship, and endurance. 'The Shawshank Redemption' offers a masterclass in storytelling. Tim Robbins and Morgan Freeman deliver captivating performances in this emotionally resonant drama that explores the human spirit under oppression.",
          image: null
        },
        {
          title: "The Godfather",
          slug: "the-godfather",
          rating: 9.2,
          content: "An epic portrayal of a Mafia dynasty that balances raw violence with deep emotional gravity. 'The Godfather' is more than a crime story; it’s a reflection on power, loyalty, and legacy. A cinematic masterpiece from Francis Ford Coppola.",
          image: null
        },
        {
          title: "The Dark Knight",
          slug: "the-dark-knight",
          rating: 9.0,
          content: "With gripping action and a haunting performance by Heath Ledger as The Joker, 'The Dark Knight' redefined superhero films. It delves deep into moral ambiguity, chaos, and the cost of justice. Nolan's direction is exceptional.",
          image: null
        },
        {
          title: "Pulp Fiction",
          slug: "pulp-fiction",
          rating: 8.9,
          content: "A nonlinear narrative bursting with unforgettable dialogue and unique characters. Tarantino’s 'Pulp Fiction' mixes violence, humor, and pop culture in a way that became instantly iconic. It’s bold, stylish, and endlessly quotable.",
          image: null
        },
        {
          title: "Inception",
          slug: "inception",
          rating: 8.8,
          content: "A mind-bending thriller that explores dreams within dreams. Christopher Nolan’s 'Inception' is a technical marvel and philosophical puzzle, brought to life with stunning visuals and a compelling performance by Leonardo DiCaprio.",
          image: null
        },
        {
          title: "Fight Club",
          slug: "fight-club",
          rating: 8.8,
          content: "David Fincher’s 'Fight Club' is a dark, thought-provoking commentary on consumerism, masculinity, and identity. Edward Norton and Brad Pitt deliver unforgettable performances in this cult classic full of twists.",
          image: null
        },
        {
          title: "Forrest Gump",
          slug: "forrest-gump",
          rating: 8.8,
          content: "A heartwarming and inspirational story told through the eyes of Forrest, a man with a low IQ but a heart full of love. Tom Hanks shines in this emotional journey through America’s social history, proving that simplicity can be profound.",
          image: null
        },
        {
          title: "The Matrix",
          slug: "the-matrix",
          rating: 8.7,
          content: "A revolutionary sci-fi action film that explores reality, consciousness, and control. With groundbreaking effects and philosophical depth, 'The Matrix' became a cultural phenomenon that still resonates today.",
          image: null
        },
        {
          title: "Interstellar",
          slug: "interstellar",
          rating: 8.6,
          content: "An emotional sci-fi epic that explores time, space, and love across galaxies. Nolan’s 'Interstellar' blends science and emotion with breathtaking visuals and a powerful score. A true cinematic experience.",
          image: null
        },
        {
          title: "Parasite",
          slug: "parasite",
          rating: 8.6,
          content: "A genre-bending masterpiece that critiques social inequality with dark humor and thrilling plot twists. Bong Joon-ho’s 'Parasite' is a modern classic that keeps you engaged until the shocking end.",
          image: null
        },
        {
          title: "Gladiator",
          slug: "gladiator",
          rating: 8.5,
          content: "A visually stunning epic about honor, vengeance, and legacy. Russell Crowe’s iconic performance anchors this emotionally powerful and action-packed story set in ancient Rome.",
          image: null
        },
        {
          title: "Whiplash",
          slug: "whiplash",
          rating: 8.5,
          content: "A gripping exploration of ambition, obsession, and the price of greatness. J.K. Simmons delivers an intense and unforgettable performance in this tightly paced, emotionally charged drama.",
          image: null
        }
      ];

      for (const review of reviews) {
        await strapi.entityService.create('api::review.review', {
          data: review
        });
      }

      strapi.log.info('✅ 12 Movie reviews seeded!');
    }
  }
};
