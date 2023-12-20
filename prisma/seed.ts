import { db } from "@/lib/db.server";
import { getFlagEmoji } from "@/routes/_index";
import { fakerEN_US as faker } from "@faker-js/faker";

function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex}`;
}

async function main() {
  for (const _index of Array(1000).keys()) {
    const randomState = faker.location.state(); // 'Utah'
    const randomCountryCode = faker.location.countryCode(); // 'US',

    await db.vote.create({
      data: {
        color: faker.color.rgb(), // #c7ecee
        comment: faker.lorem.sentence({ min: 3, max: 12 }), // 'Fugiat repellendus nisi.',
        author: faker.person.fullName(), // Rowan Nikolaus,
        createdAt: faker.date.past(), // '2022-07-31T01:33:29.567Z',
        geoLocation: {
          create: {
            countryCode: randomCountryCode,
            country: faker.location.country(), // 'United States of America',
            countryFlag: getFlagEmoji(randomCountryCode), // '🇺🇸',
            state: randomState,
            stateCode: faker.location.state({ abbreviated: true }), // 'UT',
            city: faker.location.city(), // 'Park City',
            postalCode: faker.location.zipCode(), // '84060',
            // postalCode: faker.location.zipCode({ state: randomState }), // '84060',
            ip: faker.internet.ipv4(), // '245.108.222.0'
          },
        },
      },
    });
  }

  const votes = await db.vote.count();
  const geoLocations = await db.geoLocation.count();
  console.log(`✅ Seeded ${votes} votes`);
  console.log(`✅ Seeded ${geoLocations} geo locations`);
}

main()
  .then(async () => {
    await db.$disconnect();
    console.log("🚀 Seed completed successfully");
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    console.log("❌ Seed failed");
    process.exit(1);
  });
