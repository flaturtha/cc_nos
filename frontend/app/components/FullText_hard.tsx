import React from "react";
import { Separator } from "../../@/components/ui/separator";
import { PortableText } from '@portabletext/react';

const FullText: React.FC<{ data: any }> = ({ data }) => {
  const sections = data.map((section: any, index: number) => ({
    id: `section-${index}`,
    title: section.title || `Section ${index + 1}`,
    content: section,
  }));

  return (
    <article id="free" className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
      <div className="space-y-2 not-prose">
        <h1 className="font-breamcatcher text-4xl font-extrabold tracking-loose lg:text-5xl lg:leading-[3.5rem]">
          The Spider Lily
        </h1>
        <div className="text-muted-foreground">
          <h2 className="font-medium mb-5"><span className="font-light">By</span> Bruno Fischer</h2>
          {/* <Separator orientation="horizontal" /> */}
          <p className="italic font-medium mt-14">Mammoth Magazine<br /><span className="not-italic">Jan. 6, 1946</span></p>
        </div>
      </div>
      <nav className="space-y-2 border-y pb-4 my-24 text-lg flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-center mb-9">Contents</h2>
        <ol className="list-decimal space-y-1 chapter-list pb-10 list-outside">
          <li className="font-medium">Returning Home</li>
          <li className="font-medium">Yesterday and Today</li>
        </ol>
      </nav>
      <article className="prose text-lg mt-44">

        <h3 className="font-breamcatcher font-normal text-gray-700 mb-0 mt-16">Chapter 1</h3>
        <h2 className="font-breamcatcher mb-24">Returning Home</h2>
        <p className="custom-first-line">She wasn’t there. I paused on the lowest step and looked past the two women running toward me. Lily wasn’t anywhere on the narrow station platform.</p>

        <p>“Getting off, Lieutenant?” the conductor said.</p>

        <p>I stepped down to the platform. My sister Ursula flung her arms about me and held me to her cushiony bosom and said my name over and over as if to taste the sound of it.</p>

        <p>Miriam watched me with a tremulous smile. Her black hair was gathered back in a tight bun, showing her high forehead to the hairline. The summer sun had given an Oriental burnish to her normally dark skin, making a charming contrast with the egg-shell white of her thin, nicely filled sweater.</p>

        <p>“Where’s Lily?” I asked Ursula.</p>

        <p>“She couldn’t come.” Ursula’s fingers ran over the ribbons on my chest. “You didn’t write us about all those medals.”</p>

        <p>“Why couldn’t Lily come?” I said. Ursula stepped back.</p>

        <p>“I’ll explain later. Aren’t you going to say hello to Miriam?”</p>

        <p>I held out a hand to Miriam. She didn’t seem to notice it. She leaned against me and tilted her face and I brushed her mouth with mine. Her hands touched my arms and fell away quickly when I turned back to Ursula.</p>

        <p>“Is that the way to kiss Miriam after two years, Alec?” Ursula boomed.</p>

        <p>She was a big woman, large-boned rather than fleshy, handsome rather than pretty. She was feminine enough for most men’s taste, except when she was bossy and then she assumed the voice and manner of a back-slapping male. I’d never liked that in her, and it jarred me now, particularly.</p>

        <p>“Has anything happened to Lily?” I persisted.</p>

        <p>There was a silence overlapped by the roar of the departing train. Ursula and Miriam exchanged a glance. Then Ursula said, “She’s not home today,” and tucked a hand through my arm. “How about showing some interest in Miriam and me?”</p>

        <p>“Why hasn’t Lily come to the station?” I said. “I phoned yesterday from New York that I’d be on this train.”</p>

        <p>Ursula’s mouth made a crooked diagonal line, the way it did when she was annoyed. She didn’t have a chance to say whatever she intended to because just then Oliver Spencer came around the corner of the station house. He hurried toward me with outstretched hand.</p>

        <p>He was a little man with a habitual stoop and a fringe of gray hair forming a halo about his bald pate. He owned the largest food market in West Amber, and he had a daughter with whom I used to neck and a son with whom I’d gone to high school.</p>

        <p>“Well, well!” he said, pumping my hand. “I’ve heard you were coming home from India. Are you better?”</p>

        <p>“I wasn’t wounded.” I picked up my bag.</p>

        <p>“I know. I heard you were very sick. Some kind of mental—”</p>

        <p>Ursula said quickly: “Doesn’t he look fine, Oliver? So ruddy and clear eyed.”</p>

        <p>“Oh.” Mr. Spencer glanced at his watch. “You look fit all right, Alec. I’ve got to see about a shipment of eggs which came by express.” He shook my hand again and bustled off.</p>

        <div className="text-center my-4">
          <span className="inline-block mt-8 text-sm text-gray-500">* * *</span>
        </div>

        <p>I walked between Ursula and Miriam down the length of the platform. None of us seemed to have any words. This wasn’t at all the way I had expected it.</p>

        <p>When we reached the car, Ursula paused with her hand on the door handle and looked back. “I should have told Oliver that I’m calling off tonight’s game. Unless you’d like to take a hand at poker, Alec?”</p>

        <p>“I expect to spend the evening with Lily, so go ahead and play,” I said.</p>

        <p>Ursula slid behind the wheel without comment. We sat three in the front seat, I in the middle. The sedan still had its luster, inside and out, but it had trouble climbing the hill from the station to the town.</p>

        <p>I leaned forward, listening to the motor. “It needs a tune-up. I’ll work on it tomorrow.”</p>

        <p>“The car missed you almost as much as we did,” Ursula said.</p>

        <p>That was all. I’d been gone twenty-two months. I had come home from the other side of the world, and conversation lagged after a couple of sentences about the car. I felt Miriam’s thigh against my right thigh and Ursula’s shoulder against my left shoulder, but we weren’t together at all.</p>

        <p>We drove through the business section of West Amber. It was exactly the way I had left it: the sun baking the road and men in shirtsleeves lounging in the shade of storefronts and women in slacks wheeling baby carriages and children playing box games on the sidewalk and cars searching for parking space along the curb. Month after month, lying in a sticky bunk under netting or flying six miles above earth or brooding at the tail end of drinking too much, you saw this scene in your mind and your insides contracted at the thought of coming home to it or of never coming home to it or to anything, and sometimes you were sure that you would weep like a woman when you saw it again.</p>

        <p>Here I was and it wasn’t like that. It wasn’t anything but a familiar scene.</p>

        <p>“Look,” I said angrily. “When I was grounded, I wrote you that there was nothing much wrong with me, physically or mentally.”</p>

        <p>“Of course,” Ursula said.</p>

        <p>“Then what was Mr. Spencer talking about? He seemed to expect me to get off the train cutting paper dolls.”</p>

        <p>“I suppose he heard—” she had trouble getting the rest of it out.</p>

        <p>“That I was psychoneurotic?” I said. “So what? In the Air Forces that term covers almost anything. In my case it merely meant that the flight surgeon decided that I shouldn’t fly combat any more. Most men can’t fly combat to begin with. I’m at least as normal as they are.”</p>

        <p>“Of course.”</p>

        <p>“Then, damn it, don’t try to shield me from myself or from anybody else!”</p>

        <div className="text-center my-4">
          <span className="inline-block mt-8 text-sm text-gray-500">* * *</span>
        </div>
              
        <p>URSULA took her eyes from the road, but not long enough for me to look into them. “What gives you the idea that anybody is trying to shield you from anything?”</p>

        <p>“You do. I can take it. Go ahead and tell me that my wife walked out on me.”</p>

        <p>“She didn’t,” Miriam said, her voice a little breathless.</p>

        <p>“Then why wasn’t Lily at the station to meet me?”</p>

        <p>“Alec, stop screaming,” Ursula said quietly.</p>

        <p>I hadn’t realized that I was. I sank back between the shoulders of the two women and found that I was panting.</p>

        <p>“All right, I screamed,” I said. “I suppose that proves that I’m a mental case.”</p>

        <p>“Nobody thinks you are,” Ursula said. “Don’t be so sensitive.”</p>

        <p>“I’m sorry,” I said. “There’s no reason why I should be sensitive. None at all. I’ve been away for a couple of years in a place I hated, doing what no man should be made to do. All that sustained a lot of us was the thought of getting home. Home to our wives—those who had them. Now I’m home and my wife—”</p>

        <p>“Alec, listen.” Miriam touched my arm. “Lily—”</p>

        <p>“She happens to be visiting relatives in New York.” Ursula cut in tartly. “That’s why she wasn’t at the station.”</p>

        <p>“Then why didn’t you let me know when I phoned you from New York? I could have met her there.”</p>

        <p>“Because we wanted to see you,” Ursula said. “Lily would have kept you away from us for days. You’ll have time enough for her.”</p>

        <p>That was all it was—jealousy. While I was away, they’d been kind enough to Lily whom I’d brought home to live with them; otherwise, Lily would have let me know in her far-between, carping letters. But now that I was back, they resented another woman’s having predominant claim to me. Females must own a man, and both of them had owned me. They were on the defensive because they had played a shabby trick on me.</p>

        <p>I said: “Ursula, please drive me back to the station.”</p>

        <p>The car slowed down, but not enough.</p>

        <p>“Can’t you wait at least a day to rush into her arms?” Ursula said grimly.</p>

        <p>“She’s my wife.”</p>

        <p>“And Miriam and I are nothing to you.”</p>

        <p>“You know that’s not true. Only—”</p>

        <p>I couldn’t bring myself to put it into words for them. I had a right.</p>
      </article>
    </article>
  );
};

export default FullText;