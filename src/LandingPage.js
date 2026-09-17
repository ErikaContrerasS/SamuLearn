import React from "react";
import { ArrowRight, BookOpen, Brain, Star, Clock, Trophy, Sparkles } from "lucide-react";

const LandingPage = ({ onStartApp }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-andawanda-cream via-white to-andawanda-mint/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-andawanda-coral/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-andawanda-mustard/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-andawanda-purple/20 rounded-full blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-block relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-andawanda-coral via-andawanda-mustard to-andawanda-mint rounded-full blur-lg opacity-30"></div>
                <h1 className="relative text-7xl md:text-9xl font-extrabold mb-4 tracking-tight">
                  <span className="text-andawanda-coral drop-shadow-sm">A</span>
                  <span className="text-andawanda-mustard drop-shadow-sm">n</span>
                  <span className="text-andawanda-mint drop-shadow-sm">d</span>
                  <span className="text-andawanda-purple drop-shadow-sm">a</span>
                  <span className="text-andawanda-coral drop-shadow-sm">w</span>
                  <span className="text-andawanda-mustard drop-shadow-sm">a</span>
                  <span className="text-andawanda-mint drop-shadow-sm">n</span>
                  <span className="text-andawanda-purple drop-shadow-sm">d</span>
                  <span className="text-andawanda-coral drop-shadow-sm">a</span>
                </h1>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Sparkles className="w-6 h-6 text-andawanda-mustard" />
                <p className="text-2xl md:text-4xl text-andawanda-coffee font-bold">
                  ¡Aprende jugando!
                </p>
                <Sparkles className="w-6 h-6 text-andawanda-mustard" />
              </div>
            </div>

            {/* Mascot Illustration Placeholder */}
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-andawanda-mint/40 to-andawanda-purple/30 rounded-full blur-2xl transform scale-110"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-andawanda-mint to-andawanda-mint/80 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50">
                  <div className="text-9xl md:text-[12rem] animate-bounce-slow">
                    🦖
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 text-4xl animate-float">⭐</div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-float-delayed">🌟</div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-extrabold text-andawanda-coffee mb-6 leading-tight">
                Tu aventura de aprendizaje{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-andawanda-coral to-andawanda-mustard">
                  comienza aquí
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-andawanda-coffee/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Descubre una forma divertida y emocionante de aprender lectura, matemáticas y mucho más con nuestros juegos interactivos diseñados para niños
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onStartApp}
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-andawanda-coral to-andawanda-mustard hover:from-andawanda-coral/90 hover:to-andawanda-mustard/90 text-white text-2xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                ¡Comenzar Aventura!
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold text-andawanda-coffee mb-4">
            ¿Qué encontrarás en Andawanda?
          </h3>
          <p className="text-xl text-andawanda-coffee/60">
            Actividades diseñadas para hacer el aprendizaje divertido
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-andawanda-mint/30">
            <div className="w-20 h-20 bg-gradient-to-br from-andawanda-mint/30 to-andawanda-mint/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-10 h-10 text-andawanda-mint" />
            </div>
            <h4 className="text-2xl font-bold text-andawanda-coffee mb-3">
              Lectura Crítica
            </h4>
            <p className="text-andawanda-coffee/70 leading-relaxed">
              Historias interactivas con preguntas que desarrollan tu comprensión y pensamiento crítico
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-andawanda-mustard/30">
            <div className="w-20 h-20 bg-gradient-to-br from-andawanda-mustard/30 to-andawanda-mustard/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-10 h-10 text-andawanda-mustard" />
            </div>
            <h4 className="text-2xl font-bold text-andawanda-coffee mb-3">
              Pixel Art
            </h4>
            <p className="text-andawanda-coffee/70 leading-relaxed">
              Crea hermosos diseños pixelados mientras mejoras tu memoria y atención al detalle
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-andawanda-purple/30">
            <div className="w-20 h-20 bg-gradient-to-br from-andawanda-purple/30 to-andawanda-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Star className="w-10 h-10 text-andawanda-purple" />
            </div>
            <h4 className="text-2xl font-bold text-andawanda-coffee mb-3">
              Matemáticas Divertidas
            </h4>
            <p className="text-andawanda-coffee/70 leading-relaxed">
              Practica operaciones matemáticas de una manera entretenida y desafiante
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-andawanda-coral/30">
            <div className="w-20 h-20 bg-gradient-to-br from-andawanda-coral/30 to-andawanda-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Trophy className="w-10 h-10 text-andawanda-coral" />
            </div>
            <h4 className="text-2xl font-bold text-andawanda-coffee mb-3">
              Sistema de Recompensas
            </h4>
            <p className="text-andawanda-coffee/70 leading-relaxed">
              Gana estrellas y trofeos mientras completas desafíos y mejoras tus habilidades
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-andawanda-mint/30">
            <div className="w-20 h-20 bg-gradient-to-br from-andawanda-mint/30 to-andawanda-mint/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-10 h-10 text-andawanda-mint" />
            </div>
            <h4 className="text-2xl font-bold text-andawanda-coffee mb-3">
              A tu Ritmo
            </h4>
            <p className="text-andawanda-coffee/70 leading-relaxed">
              Aprende sin presión, con ejercicios adaptados a diferentes niveles de dificultad
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-andawanda-mustard/30">
            <div className="w-20 h-20 bg-gradient-to-br from-andawanda-mustard/30 to-andawanda-mustard/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <div className="text-4xl">🎮</div>
            </div>
            <h4 className="text-2xl font-bold text-andawanda-coffee mb-3">
              100% Interactivo
            </h4>
            <p className="text-andawanda-coffee/80">
              Aprendizaje activo a través de juegos que mantienen tu interés y motivación
            </p>
          </div>
        </div>
      </div>

      {/* Levels Section */}
      <div className="bg-gradient-to-br from-white to-andawanda-cream/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-andawanda-coffee mb-4">
              Niveles de Aprendizaje
            </h3>
            <p className="text-xl text-andawanda-coffee/60">
              Progresiva adaptación a tu desarrollo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-gradient-to-br from-andawanda-mint/20 to-andawanda-mint/5 rounded-3xl border-2 border-andawanda-mint/30 hover:border-andawanda-mint/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
              <h4 className="text-3xl font-bold text-andawanda-coffee mb-3">Básico</h4>
              <p className="text-lg text-andawanda-coffee/70 leading-relaxed">
                Comienza tu viaje con actividades fundamentales
              </p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-andawanda-mustard/20 to-andawanda-mustard/5 rounded-3xl border-2 border-andawanda-mustard/30 hover:border-andawanda-mustard/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🌿</div>
              <h4 className="text-3xl font-bold text-andawanda-coffee mb-3">Intermedio</h4>
              <p className="text-lg text-andawanda-coffee/70 leading-relaxed">
                Desarrolla habilidades más complejas
              </p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-andawanda-purple/20 to-andawanda-purple/5 rounded-3xl border-2 border-andawanda-purple/30 hover:border-andawanda-purple/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🌳</div>
              <h4 className="text-3xl font-bold text-andawanda-coffee mb-3">Avanzado</h4>
              <p className="text-lg text-andawanda-coffee/70 leading-relaxed">
                Domina desafíos que requieren pensamiento crítico
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative overflow-hidden bg-gradient-to-r from-andawanda-coral via-andawanda-mustard to-andawanda-mint py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              ¿Listo para comenzar tu aventura?
            </h3>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
            Únete a miles de niños que ya están aprendiendo con Andawanda
          </p>
          <button
            onClick={onStartApp}
            className="group inline-flex items-center px-12 py-6 bg-white text-andawanda-coral text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl"
          >
            ¡Empezar Ahora!
            <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-andawanda-coffee to-andawanda-coffee/90 text-andawanda-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-andawanda-mustard" />
            <p className="text-xl font-semibold">
              © 2024 Andawanda
            </p>
            <Sparkles className="w-5 h-5 text-andawanda-mustard" />
          </div>
          <p className="text-lg text-andawanda-cream/80">
            Hecho con ❤️ para el aprendizaje de niños
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;