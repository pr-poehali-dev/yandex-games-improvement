import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const topGames = [
    { id: 1, title: 'Cosmic Quest', rating: 4.8, players: '2.3M', category: 'RPG', image: '/img/04cb90a0-d9db-4298-8355-f85335debe97.jpg' },
    { id: 2, title: 'Neon Racers', rating: 4.7, players: '1.8M', category: 'Гонки', image: '/img/fa9476b8-3197-49e0-b9ad-98438b3e89bf.jpg' },
    { id: 3, title: 'Space Battle', rating: 4.9, players: '3.1M', category: 'Шутер', image: '/img/57212004-91be-4ddc-b6f1-904db993d3aa.jpg' },
    { id: 4, title: 'Puzzle Galaxy', rating: 4.6, players: '1.2M', category: 'Головоломка', image: '/placeholder.svg' }
  ];

  const newGames = [
    { id: 5, title: 'Cyber City', rating: 4.5, category: 'Action', isNew: true },
    { id: 6, title: 'Magic Realms', rating: 4.4, category: 'RPG', isNew: true },
    { id: 7, title: 'Speed Arena', rating: 4.6, category: 'Спорт', isNew: true }
  ];

  const tournaments = [
    { id: 1, name: 'Cosmic Championship', prize: '50,000₽', participants: 1247, endDate: '15 часов' },
    { id: 2, name: 'Speed Masters', prize: '25,000₽', participants: 892, endDate: '2 дня' },
    { id: 3, name: 'Galaxy League', prize: '75,000₽', participants: 2156, endDate: '5 дней' }
  ];

  const achievements = [
    { id: 1, name: 'Первая победа', description: 'Выиграйте первую игру', progress: 100, reward: '100 XP' },
    { id: 2, name: 'Игровой марафон', description: 'Играйте 7 дней подряд', progress: 85, reward: '500 XP' },
    { id: 3, name: 'Чемпион турнира', description: 'Займите 1 место в турнире', progress: 60, reward: '1000 XP' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-orbitron font-bold gaming-gradient bg-clip-text text-transparent">
                GameHub
              </h1>
              <nav className="hidden md:flex space-x-6">
                <Button variant="ghost" className="hover-scale">Главная</Button>
                <Button variant="ghost" className="hover-scale">Каталог</Button>
                <Button variant="ghost" className="hover-scale">Турниры</Button>
                <Button variant="ghost" className="hover-scale">Рейтинги</Button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск игр..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10"
                />
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button className="gaming-gradient hover-scale font-orbitron">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gaming-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 animate-fade-in">
            Игровая Вселенная
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
            Откройте для себя тысячи увлекательных игр, участвуйте в турнирах и соревнуйтесь с игроками со всего мира
          </p>
          <div className="flex justify-center space-x-4 animate-scale-in">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-orbitron">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="Trophy" size={20} className="mr-2" />
              Турниры
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Top Games */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Топовые игры</h3>
            <Button variant="outline" className="hover-scale">
              Все игры <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topGames.map((game, index) => (
              <Card key={game.id} className="group hover-scale hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img src={game.image} alt={game.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="absolute top-2 right-2">
                    <Badge className="gaming-gradient-2">{game.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-orbitron">{game.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{game.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{game.players} игроков</span>
                  </div>
                  <Button className="w-full gaming-gradient-3 hover-scale">
                    <Icon name="Play" size={16} className="mr-2" />
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* New Games */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Новые игры</h3>
            <Button variant="outline" className="hover-scale">
              Все новинки <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newGames.map((game, index) => (
              <Card key={game.id} className="group hover-scale transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron">{game.title}</CardTitle>
                    {game.isNew && <Badge className="gaming-gradient animate-pulse-glow">Новая</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{game.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <span>{game.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full gaming-gradient hover-scale">
                    <Icon name="Download" size={16} className="mr-2" />
                    Попробовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tournaments */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Активные турниры</h3>
            <Button variant="outline" className="hover-scale">
              Все турниры <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.map((tournament, index) => (
              <Card key={tournament.id} className="group hover-scale transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron">{tournament.name}</CardTitle>
                    <Icon name="Trophy" size={24} className="text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold gaming-gradient bg-clip-text text-transparent">
                        {tournament.prize}
                      </p>
                      <p className="text-sm text-muted-foreground">Призовой фонд</p>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Участников: {tournament.participants}</span>
                      <span>До конца: {tournament.endDate}</span>
                    </div>
                    
                    <Button className="w-full gaming-gradient-2 hover-scale">
                      <Icon name="Zap" size={16} className="mr-2" />
                      Участвовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Достижения</h3>
            <Button variant="outline" className="hover-scale">
              Мой профиль <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={achievement.id} className="group hover-scale transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 gaming-gradient rounded-lg">
                      <Icon name="Award" size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-orbitron">{achievement.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Прогресс</span>
                      <span className="text-sm font-semibold">{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                    <div className="text-center">
                      <Badge className="gaming-gradient-3">{achievement.reward}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-orbitron font-bold text-xl mb-4 gaming-gradient bg-clip-text text-transparent">
                GameHub
              </h4>
              <p className="text-muted-foreground">
                Лучшая игровая платформа для геймеров всех уровней
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Игры</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto">Популярные</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Новинки</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Бесплатные</Button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Сообщество</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto">Турниры</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Рейтинги</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Форум</Button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto">FAQ</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Помощь</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Контакты</Button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 GameHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;