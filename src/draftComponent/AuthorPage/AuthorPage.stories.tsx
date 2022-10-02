import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthorPage from './AuthorPage';
import AuthorImg from '../../assets/img/authorImg.png';

export default {
  titel: 'authorPage',
  component: AuthorPage,
} as ComponentMeta<typeof AuthorPage>;

const Template: ComponentStory<typeof AuthorPage> = (args) => (
  <AuthorPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  img: AuthorImg,
  yearsLife: '29 july 1817 – 2 may 1900',
  fullName: 'Ivan Aivazovsky',
  placeBirth: 'Feodosia, Russian Empire',
  description: `Ivan Konstantinovich Aivazovsky was a Russian Romantic painter who is considered one of the greatest masters of marine art. Baptized as Hovhannes Aivazian, he was born into an Armenian family in the Black Sea port of Feodosia in Crimea and was mostly based there...
    Following his education at the Imperial Academy of Arts in Saint Petersburg, Aivazovsky traveled to Europe and lived briefly in Italy in the early 1840s. He then returned to Russia and was appointed the main painter of the Russian Navy. Aivazovsky had close ties with the military and political elite of the Russian Empire and often attended military maneuvers. He was sponsored by the state and was well-regarded during his lifetime. The saying "worthy of Aivazovsky's brush", popularized by Anton Chekhov, was used in Russia for describing something lovely. He remains highly popular in Russia in the 21st century.
    One of the most prominent Russian artists of his time, Aivazovsky was also popular outside Russian Empire. He held numerous solo exhibitions in Europe and the United States. During his almost 60-year career, he created around 6,000 paintings, making him one of the most prolific artists of his time. The vast majority of his works are seascapes, but he often depicted battle scenes, Armenian themes, and portraiture. Most of Aivazovsky's works are kept in Russian, Ukrainian and Armenian museums as well as private collections.`,
};
