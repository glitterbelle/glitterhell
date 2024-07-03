import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/maschinen_krieger_logo.png"
          alt="Maschinen Krieger Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2807</h3>
            <p>Earth - World War IV breaks out. The resulting destruction kills up to 80% of Earth’s inhabitants. The few survivors depart on transport ships to Colony Planet K-156.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2825</h3>
            <p>Galactic Federation - First Interplanetary Dispute</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2855</h3>
            <p>Galactic Federation - Immigrant Survey Party reports that Earth is hospitable again</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2859</h3>
            <p>Galactic Federation - The 1st Earth Colonization Team arrives</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2860</h3>
            <p>Galactic Federation - Second Interplanetary Dispute</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>June 15, 2865</h3>
            <p>Galactic Federation - Eugen Johannes Amsel receives notification that his family can participate in the 7th Earth Colonization Team. Conrad Amsel is born on colonization planet K-156</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2866</h3>
            <p>Earth Colonies - The 7th Earth Colonization Team arrives.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2871</h3>
            <p>Earth Colonies - The Amzel family farm prospers.</p>
            <p>Galactic Federation - Sends the Strahl National Defense Army to suppresses a civil war on K-156</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2875</h3>
            <p>Earth Colonies - Crime and lawlessness are epidemic in the new cities.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>March 1, 2875</h3>
            <p>Strahl National Defence Army - Evaluates the XPK40 at Archmar Aerodrome</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>March 2, 2875</h3>
            <p>Strahl National Defence Army - Approves the XPK40 and begins production of the PK40 "Fledermaus."</p>
            <p>Earth Colonies - Eddie Amzel is born.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2877</h3>
            <p>Strahl National Defence Army - The Galaxy Federation gives the Strahl Republic a mandate to rule the Earth.</p>
            <p>Strahl National Defence Army - Three Strahl National-Defense Army Police Battalions and three Strahl Army Foreign Legion Battalions are deployed on Earth to maintain order.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2880</h3>
            <p>Earth Colonies - The first occurrence of terrorism against Strahl National-Defense Army.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>August, 2880</h3>
            <p>Strahl National Defence Army - The research team at Bomvul & Zionel is formed. The program to develop a 2-legged walking tank begins.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2882</h3>
            <p>Mercenary Army - The new Earth Independent Provisional Government declares independence from the Strahl Republic</p>
            <p>Strahl National Defence Army - A puppet government is formed by the Strahl Republic in response to the Earth Declaration of Independence. Strahl troops are deployed to quell the independence movement.</p>
            <p>Mercenary Army - War is declared by the Earth Independent Provisional Government</p>
            <p>Strahl National Defence Army - The three Army Foreign Legion Corps, which were staffed by former mercenaries from previous interplanetary wars, defected from the SDR and joined the Mercenary Army.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September, 2882</h3>
            <p>Mercenary Army - Maintains control of much of Earth’s surface.</p>
            <p>Mercenary Army - The Spandau College of Engineering begins research on composite armor.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 1, 2882</h3>
            <p>Strahl National Defence Army - First operational sortie against the Mercenary Army is launched.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 25, 2882</h3>
            <p>Mercenary Army - Attacked the Strahl 56th Armored Army Corps with Y-15 medium tanks.</p>
            <p>Strahl National Defence Army - The 7th Armored Mobile Infantry Division is dropped into Australia.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 26, 2882</h3>
            <p>Mercenary Army - Launches a counter attack against the Strahl Army.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 29, 2882</h3>
            <p>Strahl National Defence Army - Succeeds in forming a bridgehead in Australia.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>November 15, 2882</h3>
            <p>Mercenary Army - Earth Independent Provisional Government surrenders capital New Canberra</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>February, 2883</h3>
            <p>Strahl National Defence Army - Bomvol und Zionel Engineers finish a mockup of a two legged walking tank.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>March, 2883</h3>
            <p>Strahl National Defence Army - Development of unmanned reconnaissance equipment begins.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>June, 2883</h3>
            <p>Mercenary Army - Dr. Robert Fulman of the Optical Weapons Research Center prototypes the indirect vision system.</p>
            <p>Mercenary Army - The Spandau College of Engineering completes its composite armor defense system development.</p>
            <p>Mercenary Army - Dr Gerstine, manager of the Laser Weapon Research Center, develops the Excimer high output laser. Later to be installed in SAFS units.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>June 9, 2883</h3>
            <p>Mercenary Army - The first prototype of the AFS is completed.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>June 15, 2883</h3>
            <p>Mercenary Army - The 1st Special Infantry Company (composed of 14 AFS) participates in the first battle with armored suits. The success in battle is beyond expectations.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>July, 2883</h3>
            <p>Mercenary Army - Mass-production of the AFS starts in the Mercenary Army Central Arsenal in the North American Continent.</p>
            <p>Strahl National Defence Army - First trial evaluations of an automated two legged walking tank are completed.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>November, 2883</h3>
            <p>Mercenary Army - Development of the next generation of AFS begins.</p>
            <p>Mercenary Army - Armored aircraft Chaika enters service.</p>
            <p>National Defense Army - Two prototypes of the unmanned reconnaissance walker T.W-47V1 are completed.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>December, 2883</h3>
            <p>Mercenary Army - Launches "Operation Sherbet Garden" an attack on the Strahl navel port of Archangles. Lack of equipment and cold weather training result in losses for Mercenary Army.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>January, 2884</h3>
            <p>Strahl National Defence Army - Adopts the first production units of the T.W47 Krote</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>February 14, 2884</h3>
            <p>Strahl National Defence Army - Production delays of the PKA suit force the development of an unmanned hover tank. PKH103 Nut Cracker development begins.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>June 9, 2884</h3>
            <p>Mercenary Army - New Canberra is surrounded. Attempts to retake former capital begin.</p>
            <p>Strahl National Defence Army - The PKH103 unmanned hover tanks make their first battlefield appearance. They are given the nickname Nut Cracker.</p>
            <p>Mercenary Army - Using an AFS MkII Corporal Robert Bush was able to defeat a Nut Cracker by climbing on the back to disable the turret.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>June 21, 2884</h3>
            <p>Strahl National Defence Army - PK41 Hornisse public test flight is carried out. Modified from a PK40 by Dr. Ferdinand Lipish.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>July, 2884</h3>
            <p>Mercenary Army - The 54th Fighter Group (JG54) 3rd Regiment is composed in New Zealand.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>August, 2884</h3>
            <p>Mercenary Army - SdKfz 222/232 SandStalker weapons are upgraded from the 2.3cm machine guns to the 4cm medium infrared laser Pgr 40 and put back into service.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>August 31, 2884</h3>
            <p>Mercenary Army - The Y-615 DollHouse is deployed as a counter measure against the PKH103 “Nut Cracker”</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September, 2884</h3>
            <p>Mercenary Army - Research begins for the next generation AFS at the Spandau College of Engineering. The Super AFS Prototype Arms development office obtains good results with the three prototypes of the Archeleon</p>
            <p>Mercenary Army - The Archeleon units test the new indirect vision system.</p>
            <p>Strahl National Defence Army - Production of PK40 ends.</p>
            <p>Strahl National Defence Army - Production of the NS465 Neuspotter begins. Production was slow due to the shortage of antigravity equipment.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 3, 2884</h3>
            <p>Strahl National Defence Army - 200 PKA Ausf H0 initial mass-production models are thrown into the front lines.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 17, 2884</h3>
            <p>Strahl National Defence Army - PK41 Hornisse development is completed.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 23, 2884</h3>
            <p>Strahl National Defence Army - Hornisse is assigned to the 362nd Assault Scout Company.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>October, 2884</h3>
            <p>Mercenary Army - Attempts to retake New Canberra end with out success.</p>
            <p>Strahl National Defence Army - Deployment of Neuspotter begins.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>October 22, 2884</h3>
            <p>Strahl National Defence Army - Unit reorganization in preparation for the next large offensive.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>October 24, 2884</h3>
            <p>Mercenary Army - Production trials of the SAFS begin.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>November 1, 2884</h3>
            <p>Strahl National Defence Army - The first phase of the new offensive ends. Strahl Army takes control of most large cities and the majority of Australia.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>December, 2884</h3>
            <p>Strahl National Defence Army - Camp Group Bark is sent to North America to suppress Mercenary guerrilla activity.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>December 10, 2884</h3>
            <p>Mercenary Army - SAFS production starts.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>December 14, 2884</h3>
            <p>Mercenary Army - Four suits of the newly completed SAFS are delivered to the 14th Armored Hunting Regiment.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>December 25, 2884</h3>
            <p>Strahl National Defence Army - Launches major offensive against Torifujio-grad, one of the few Mercenary controlled cities.</p>
            <p>Mercenary Army - First encounter between SAFS and Nut Cracker ends in a Nut Cracker being destroyed with a single shot by 14th Armored Hunting Regiment's First Company's Corporal Robert Bush</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>January, 2885</h3>
            <p>Mercenary Army - Trial productions of HAFS Jerry are completed. Limited mass production begins.</p>
            <p>Mercenary Army - Are having a successful campaign in Buenos Aires.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>January 1, 2885</h3>
            <p>Strahl National Defence Army - Flight tests begin at the 362nd Assault and Recon Company training grounds for the experimental antigravity aircraft XK-427 Fire Fly, flown by Sergeant Pinge</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>March, 2885</h3>
            <p>Mercenary Army - The 45th Independent Armored Regiment is lost in combat in North America.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>March 3, 2885</h3>
            <p>Mercenary Army - An intact XK427 Fire Fly antigravity aircraft crash lands and is captured intact and evaluated by scientists. Strahl First Lieutenant Holtzmann, Sergeant Pingel, and others who were aboard, were captured by the Mercenaries.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>April, 2885</h3>
            <p>Mercenary Army - The production of AFS MkII ends.</p>
            <p>Mercenary Army - Production of the DollHouse ends to give priority to SAFS. Final DH production numbers 9,376 units</p>
            <p>Strahl National Defence Army - SDR recovers a seriously damaged SAFS and begins to evaluate the technology.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>May, 2885</h3>
            <p>Mercenary Army - Production lines shift from AFS to new SAFS MkI.</p>
            <p>Mercenary Army - DollHouse active units fielded at front lines number 5,900. Of these, 900 have the new ceramic armor.</p>
            <p>Mercenary Army - HAFS Gladiator battlefield experiments begin.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>June 14, 2885</h3>
            <p>Mercenary Army - First successful flight of the antigravity fighter PKf.85 Falke</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>July, 2885</h3>
            <p>Strahl National Defence Army - Establishes an early watch radar system for Northern Australia</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>August, 2885</h3>
            <p>Mercenary Army - The 44th Armored Army Regiment in Northern Europe receives eight HAFS Jerry</p>
            <p>Strahl National Defence Army - Launch attack against Mercenary shuttle repair facility in Japan</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September, 2885</h3>
            <p>Strahl National Defence Army - PKA Ausf G Gustav is introduced in limited numbers. First supplied to 150th Armored Hunting Regiment attached to the Camp Group, and to the 300th Armored Mobile Infantry Battalion.</p>
            <p>Strahl National Defence Army - The 501st Independent Heavy Tank Battalion reconnaissance equipment is changed from Krote to Neuspotters.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 23, 2885</h3>
            <p>Mercenary Army - Operation Super Hammer begins.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 27, 2885</h3>
            <p>Strahl National Defence Army - The Operation Super Hammer is defeated due to SDR use of satellite imagery to concentrate troop strength at key points on the front.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>October, 2885</h3>
            <p>Mercenary Army - Launches Operation Peel Banana in an attempt to destroy Strahl military satellites.</p>
            <p>Strahl National Defence Army - Unmanned reconnaissance hover tank Oscar is deployed in Australia and North America.</p>
            <p>Strahl National Defence Army - XPK 43, a modified Hornisse to accept a Gustav, takes its first flight.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>November, 2885</h3>
            <p>Mercenary Army - 128 initial production HAFS Gladiator are delivered.</p>
            <p>Strahl National Defence Army - Frontline deployments of unmanned hover patrol vessel F-Boot and unmanned reconnaissance drone Neuspine begin.</p>
            <p>November 18, 2885</p>
            <p>Strahl National Defence Army - Battlefield experiments of the heavy fighter Ze145 Salamander begin.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>December, 2885</h3>
            <p>Mercenary Army - Counterattacks in North America are launched. Most Strahl Army bases in Canada are surrounded.</p>
            <p>Mercenary Army - Field tests are performed for the HAFS Goblin</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>January, 2886</h3>
            <p>Strahl National Defence Army - PKA ausf K (W) Fliege is assigned to the Totenkopf Battle Team which deploys on the Lunar surface.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>February, 2886</h3>
            <p>Mercenary Army - The military satellite communications network between North America and North Africa is restored.</p>
            <p>Strahl National Defence Army - Deployment of the PKA ausf K (W) Kauz begins on the Lunar surface.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>February 5, 2886</h3>
            <p>Strahl National Defence Army - 100th Mechanized Infantry Division attempts to break out of encirclement of the city Super Henburke on North American continent.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>March 18, 2886</h3>
            <p>Mercenary Army - Operation Faserei is launched in Europe to expel SDR forces.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>April 30, 2886</h3>
            <p>Mercenary Army - Operation Faserei ends in South Ukraine. Mercenary Army has gained control of 70 percent of Europe.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>May, 2886</h3>
            <p>Mercenary Army - SAFS SnakeEye mass-production begins.</p>
            <p>Strahl National Defence Army – Operational tests of PKA ausf M Melusine are performed in South America</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>June, 2886</h3>
            <p>Mercenary Army - SnakeEye units are deployed to Lunar surface. Successful in establishing a Lunar base.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>August, 2886</h3>
            <p>Strahl National Defence Army - Nighttime operation "Nekker Exercise" is launched</p>
            <p>Mercenary Army - Landing operations are performed to capture a Strahl Army unmanned unit Command center. It ends in failure.</p>
            <p>Mercenary Army - SAFS MkIII Raptor mass-production begins</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September, 2886</h3>
            <p>Mercenary Army - Assault plan "Dynamo Strategy" ends in failure on the Lunar surface</p>
            <p>Strahl National Defence Army - Totenkopf Battle Team reorganizes and is deployed to South America with the new PKA Ausf M "Melusine"</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>September 17, 2886</h3>
            <p>Strahl National Defence Army - Attack on Shannon Village in Eastern Europe to drive guerillas out.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>October, 2886</h3>
            <p>Mercenary Army - The “Raptor” is delivered to the Balkan Peninsula.</p>
            <p>Mercenary Army - The convoy transportation strategy "White (FUROGGU?) Strategy" starts to the Lunar surface.</p>
            <p>Mercenary Army - Existence of an SDR unmanned command tank Konig Krote is discovered in Yugoslavia.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>December, 2886</h3>
            <p>Mercenary Army - Begins operation to recapture New Canberra.</p>
            <p>Mercenary Army - Large counterattack strategy "Pokey Pineapple Strategy" begins. "Ice Breaker Strategy" by Special Forces is performed simultaneously. It succeeds in destruction of the command and communications network of Konig Krote by an introduction of a computer virus. The malicious virus creates the artificial intelligence One of Pluto on the Lunar surface.</p>
          </div>
        </div>
      </div>


      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Milestone 1</h3>
            <p>Description of Milestone 1.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Milestone 2</h3>
            <p>Description of Milestone 2.</p>
          </div>
        </div>
        {/* Add more timeline items here */}
      </div>



      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
