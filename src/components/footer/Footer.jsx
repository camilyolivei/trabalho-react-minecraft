import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#000000] py-16 border-t border-[#1a1a1a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Divisor sutil */}
        <div className="w-16 h-[1px] bg-[#333] mb-8"></div>

        <div className="text-center space-y-4">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.5em] font-bold">
            Desenvolvido por
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Camily", "William", "Victor"].map((nome) => (
              <span
                key={nome}
                className="text-[#999] text-sm md:text-base font-medium tracking-widest hover:text-[#ffd83d] transition-colors duration-300 cursor-default"
              >
                {nome}
              </span>
            ))}
          </div>
        </div>

        <p className="text-[#222] text-[9px] uppercase tracking-[0.6em] font-bold mt-12">
          Minecraft Catalog &copy; 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
