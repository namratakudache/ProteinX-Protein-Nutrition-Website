import React, { useState } from 'react';
import { COMMUNITY_POSTS, HERO_AVATARS } from '../data/catalog';

interface CommunityHypeScreenProps {
  onShowToast: (message: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const CommunityHypeScreen: React.FC<CommunityHypeScreenProps> = ({
  onShowToast,
  onNavigateTab
}) => {
  const [likes, setLikes] = useState<Record<string, number>>({
    'post-1': 842,
    'post-2': 1209,
    'post-3': 2480,
    'post-4': 3120
  });
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [discordJoined, setDiscordJoined] = useState(false);

  const toggleLike = (id: string) => {
    const isLiked = likedPosts[id];
    setLikedPosts((prev) => ({ ...prev, [id]: !isLiked }));
    setLikes((prev) => ({
      ...prev,
      [id]: isLiked ? prev[id] - 1 : prev[id] + 1
    }));
    onShowToast(isLiked ? 'UNLIKED POST' : 'HYPED POST 🔥');
  };

  const handleJoinDiscord = () => {
    setDiscordJoined(true);
    onShowToast('DISCORD INVITE GENERATED // WELCOME TO CLUB X SYNDICATE');
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-10 py-10 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-xs font-bold px-3 py-1 rounded-full uppercase -rotate-1 inline-block mb-2 shadow-[2px_2px_0px_#000000]">
            GLOBAL SYNDICATE NETWORK
          </span>
          <h1 className="font-['Syne'] text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight leading-none">
            COMMUNITY <span className="text-[#c8f300]">&amp; HYPE</span>
          </h1>
          <p className="font-['Space_Grotesk'] text-base text-[#c5c9ac] max-w-xl mt-2">
            No paid generic influencers. Just 85,000+ athletes, esports grinders, speedrunners, and Tokyo night runners fueling supreme defiance.
          </p>
        </div>

        <button
          onClick={handleJoinDiscord}
          className="inline-flex items-center gap-2 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-5 py-3 rounded-xl uppercase shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-transform cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">forum</span>
          <span>{discordJoined ? 'CONNECTED: DISCORD (34K)' : 'JOIN CLUB X DISCORD'}</span>
        </button>
      </div>

      {/* Featured Athlete Spotlight Bento */}
      <div className="bg-[#1b1b1f] border border-[#292a2d] rounded-2xl p-6 md:p-8 shadow-[8px_8px_0px_#000000] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 relative rounded-xl overflow-hidden bg-[#0d0e11] border border-[#292a2d] h-80 sm:h-96">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWAxNLEUF_8BT97UVt5k2jCnTkE4-Yx3RnaZuEP2KjC6PshMBmupBhFoJerqxbtZSMdENfzG367Ro0KbRg3_u-abyu124gvGEBDOgdYW1XM2f7FBnplW34W0f3oPWLsJaE3JN3VCdL0U49uMGWQDmakoWQTa4iDdWSsPA2j86pKck8Utqph77TQ9PHltSg72vc_ECHi_UA_cxL7bzK831iTeHBqtpdCKWTBmBGMHTC7UGY0CdTYQtfng"
            alt="Euphoria Athlete Spotlight"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shadow-[2px_2px_0px_#000000]">
            ATHLETE SPOTLIGHT #022
          </div>
          <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-[#292a2d] flex items-center justify-between">
            <div>
              <p className="font-['Syne'] text-base font-bold uppercase text-white">MAYA "NEON" CHEN</p>
              <p className="font-['Space_Mono'] text-[10px] text-[#c8f300]">SEOUL ULTRA-RUNNER &amp; FIT CREATOR</p>
            </div>
            <span className="font-['Space_Mono'] text-xs text-white bg-[#292a2d] px-2.5 py-1 rounded">
              30G RTD OBSESSED
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-['Space_Mono'] text-[#c8f300] uppercase font-bold tracking-widest">
            // UNFILTERED INTERVIEW
          </span>
          <h3 className="font-['Syne'] text-2xl md:text-3xl font-extrabold uppercase text-white leading-tight">
            "I RUN 25KM AT MIDNIGHT. TRADITIONAL PROTEIN MADE ME GAG."
          </h3>
          <p className="font-['Space_Grotesk'] text-sm md:text-base text-[#c5c9ac] leading-relaxed">
            "Most gym shakes sit like concrete in your stomach. When you're sprinting up Namsan tower at 1 AM, you can't have bloat. The cold-pressed RTD Midnight Choco goes down like cold brew and my legs recover before dawn."
          </p>

          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="bg-[#121316] border border-[#292a2d] p-3 rounded-xl">
              <span className="font-['Space_Mono'] text-[10px] text-[#8f9378] block">WEEKLY RUNS</span>
              <span className="font-['Syne'] text-lg font-bold text-white">85 KM</span>
            </div>
            <div className="bg-[#121316] border border-[#292a2d] p-3 rounded-xl">
              <span className="font-['Space_Mono'] text-[10px] text-[#8f9378] block">FAVORITE DROP</span>
              <span className="font-['Syne'] text-lg font-bold text-[#c8f300]">RTD #094</span>
            </div>
            <div className="bg-[#121316] border border-[#292a2d] p-3 rounded-xl">
              <span className="font-['Space_Mono'] text-[10px] text-[#8f9378] block">BLOAT INDEX</span>
              <span className="font-['Syne'] text-lg font-bold text-[#ff4b89]">ZERO</span>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('products-and-drops')}
            className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-6 py-3 rounded-xl uppercase shadow-[3px_3px_0px_#000000] cursor-pointer hover:bg-[#afd500] transition-colors"
          >
            EXPLORE HER FUEL STACK
          </button>
        </div>
      </div>

      {/* UGC Gallery Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-['Syne'] text-2xl font-bold uppercase text-white">
            LIVE UNBOXINGS &amp; GYM DROPS
          </h3>
          <span className="font-['Space_Mono'] text-xs text-[#8f9378]">
            TAG #PROTEINXDROP ON INSTAGRAM / TIKTOK
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-[#1b1b1f] border border-[#292a2d] rounded-2xl p-4 flex flex-col justify-between shadow-[4px_4px_0px_#000000]"
            >
              <div>
                <div className="h-64 rounded-xl overflow-hidden bg-[#0d0e11] mb-3 relative border border-[#292a2d]">
                  <img
                    src={post.image}
                    alt={post.handle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-['Space_Mono'] text-[#c8f300]">
                    {post.location}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Space_Mono'] text-xs text-white font-bold">{post.handle}</span>
                  <span className={`text-[10px] font-['Space_Mono'] font-bold ${post.badgeColor}`}>
                    {post.role}
                  </span>
                </div>

                <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] leading-relaxed">
                  "{post.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#292a2d] flex items-center justify-between mt-3">
                <button
                  type="button"
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-1.5 text-xs font-['Space_Mono'] cursor-pointer transition-colors ${
                    likedPosts[post.id] ? 'text-[#ff4b89] font-bold' : 'text-[#8f9378] hover:text-white'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: likedPosts[post.id] ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    favorite
                  </span>
                  <span>{likes[post.id]}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onShowToast(`COPIED SHARE LINK FOR ${post.handle}`)}
                  className="text-[#8f9378] hover:text-white"
                >
                  <span className="material-symbols-outlined text-base">share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
