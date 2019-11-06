import { Component } from '@angular/core';
import { PlatziMusicService } from '../services/platzi-music.service';
import { ModalController } from '@ionic/angular';
import { SongmodalPage } from '../songmodal/songmodal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  songs: any[] = [];
  albums: any[] = [];
  artists: any[] = [];

  slideOpts = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  };


  constructor(private musicService: PlatziMusicService, public modalCtrl: ModalController) {}


  ionViewDidEnter() {
    this.musicService.getNewReleases().then(newReleases => {
      this.artists = this.musicService.getArtists();
      console.log(this.artists);
      this.songs = newReleases.albums.items.filter(e => e.album_type === 'single');
      this.albums = newReleases.albums.items.filter(e => e.album_type === 'album');
      // console.log(this.artists);
    });
  }

  async showSongs(artist) {

    console.log('asdasd');
    const songs = await this.musicService.getArtistsTopTracks(artist.id);

    const modal = await this.modalCtrl.create({
      component: SongmodalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });
    return await modal.present();
  }

}
